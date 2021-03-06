﻿using System;
using System.Data.Entity;
using System.Linq;
using System.Transactions;
using SettingsService.Impl;
using SettingsService.Impl.Migrations;

namespace SettingsService.Api.Tests.Fixtures
{
    public class TestDbFixture
    {
        public TestDbFixture()
        {
            // make sure DB is created and up-to-date
            Database.SetInitializer(new MigrateDatabaseToLatestVersion<SettingDbContext, Configuration>());
            using (var ctx = new SettingDbContext())
            {
                // make a call to DB in order to migrate it to the latest version
                var r = ctx.ExtractRules.Take(1).ToList();
            }
        }

        public SettingDbContext CreateContext()
        {
            return new TestDbContext();
        }

        private class TestDbContext : SettingDbContext, IDisposable
        {
            private readonly TransactionScope _transaction;

            internal TestDbContext()
            {
                // create a transaction scope
                _transaction = new TransactionScope(TransactionScopeOption.RequiresNew, new TransactionOptions {IsolationLevel = IsolationLevel.ReadUncommitted});
            }

            public new void Dispose()
            {
                _transaction.Dispose();
            }
        }
    }
}