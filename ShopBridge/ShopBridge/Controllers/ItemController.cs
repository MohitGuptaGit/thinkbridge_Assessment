using ShopBridge.Models;
using System;
using System.Collections.Generic;
using System.Configuration;
using System.Data;
using System.Data.SqlClient;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web;
using System.Web.Http;

namespace ShopBridge.Controllers
{
    public class ItemController : ApiController
    {
        public HttpResponseMessage Get()
        {
            string query = @"
                            select Item_id,Item_Name,Item_Description,Item_Price from dbo.Item";
            DataTable table = new DataTable();

            using (var con = new SqlConnection(ConfigurationManager.ConnectionStrings["ItemAppDB"].ConnectionString))
            using (var cmd = new SqlCommand(query, con))
            using (var da = new  SqlDataAdapter(cmd))
            {
                cmd.CommandType = CommandType.Text;
                da.Fill(table);
            
            }

            return Request.CreateResponse(HttpStatusCode.OK, table);
        }
        public string Post(Item it)
        {
            try
            {
                string query = @"
                            insert into dbo.Item values
                            (
                            '" + it.Item_Name + @"',
                            '" + it.Item_Description + @"',
                            '" + it.Item_Price + @"'
                            )";
                DataTable table = new DataTable();

                using (var con = new SqlConnection(ConfigurationManager.ConnectionStrings["ItemAppDB"].ConnectionString))
                using (var cmd = new SqlCommand(query, con))
                using (var da = new SqlDataAdapter(cmd))
                {
                    cmd.CommandType = CommandType.Text;
                    da.Fill(table);

                }

                return "Item Added Successfully!!";

            }
            catch (Exception)
            {
                return "Failed to Add Item";
            }
        }

        public string Put(Item it)
        {
            try
            {
                string query = @"
                                update dbo.Item set 
                                Item_Name='" + it.Item_Name + @"'
                                ,Item_Description='" + it.Item_Description + @"'
                                ,Item_Price='" + it.Item_Price + @"'
                                where Item_id="+it.Item_id+@"";
                            
                DataTable table = new DataTable();

                using (var con = new SqlConnection(ConfigurationManager.ConnectionStrings["ItemAppDB"].ConnectionString))
                using (var cmd = new SqlCommand(query, con))
                using (var da = new SqlDataAdapter(cmd))
                {
                    cmd.CommandType = CommandType.Text;
                    da.Fill(table);

                }

                return "Item Updated Successfully!!";

            }
            catch (Exception)
            {
                return "Failed to Update Item";
            }
        }
        
        public string Delete(int id)
        {
            try
            {
                string query = @"
                            delete from  dbo.Item where Item_id
                            =" + id + @"
                            ";
                DataTable table = new DataTable();

                using (var con = new SqlConnection(ConfigurationManager.ConnectionStrings["ItemAppDB"].ConnectionString))
                using (var cmd = new SqlCommand(query, con))
                using (var da = new SqlDataAdapter(cmd))
                {
                    cmd.CommandType = CommandType.Text;
                    da.Fill(table);

                }

                return "Item Deleted  Successfully!!";

            }
            catch (Exception)
            {
                return "Failed to Delete Item";
            }
        }

        [Route("api/Item/GetAllItem")]
        [HttpGet]
        public HttpResponseMessage GetAllItem()
        {
            string query = @"
                            select Item_Name from dbo.Item";
            DataTable table = new DataTable();

            using (var con = new SqlConnection(ConfigurationManager.ConnectionStrings["ItemAppDB"].ConnectionString))
            using (var cmd = new SqlCommand(query, con))
            using (var da = new SqlDataAdapter(cmd))
            {
                cmd.CommandType = CommandType.Text;
                da.Fill(table);

            }

            return Request.CreateResponse(HttpStatusCode.OK, table);
        }

        [Route("api/SaveFile")]
        public string SaveFile()
        {
            try
            {
                var httpRequest = HttpContext.Current.Request;
                var postedFile = httpRequest.Files[0];
                string filename = postedFile.FileName;
                var physicalPath = HttpContext.Current.Server.MapPath("~/Photos/" + filename);
                postedFile.SaveAs(physicalPath);
                return filename;
            }

            catch (Exception)
            {
                return "anonymous.png";
            }
        
        }


    }
}
