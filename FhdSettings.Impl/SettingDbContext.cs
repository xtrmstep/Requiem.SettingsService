﻿using System.Data.Entity;
using FhdSettings.Data.Models;

namespace FhdSettings.Impl
{
    public class SettingDbContext : DbContext
    {
        public DbSet<CrawlRule> CrawlRules { get; set; }
        public DbSet<CrawlHostSetting> CrawlHostSettings { get; set; }
        public DbSet<CrawlUrlSeed> CrawlUrlSeeds { get; set; }
        public DbSet<NumericDataExtractorRule> NumericDataExtractorRules { get; set; }
        public DbSet<ClinetService> ClientServices { get; set; }
        public DbSet<AuthToken> AuthTokens { get; set; }
    }
}