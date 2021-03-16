USE [ItemDB]
GO

/****** Object:  Table [dbo].[item]    Script Date: 3/16/2021 1:19:15 PM ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

CREATE TABLE [dbo].[item](
	[Item_id] [int] IDENTITY(1,1) NOT NULL,
	[Item_Name] [varchar](50) NULL,
	[Item_Description] [varchar](500) NULL,
	[Item_Price] [int] NULL
) ON [PRIMARY]
GO


