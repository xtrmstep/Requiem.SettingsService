﻿using System;
using System.Collections.Generic;
using SettingsService.Core.Data.Models;

namespace SettingsService.Core.Data
{
    public interface IAnalizerRepository
    {
        /// <summary>
        ///     Returns a single rule
        /// </summary>
        /// <param name="id"></param>
        /// <returns></returns>
        NumericDataExtractorRule GetNumericRule(Guid id);

        /// <summary>
        ///     Returns a list of rules to extract numeric data for a specific URL
        /// </summary>
        /// <returns></returns>
        IList<NumericDataExtractorRule> GetNumericRules(string host);

        /// <summary>
        ///     Update existing rule
        /// </summary>
        /// <param name="rule"></param>
        void UpdateNumericRule(NumericDataExtractorRule rule);

        /// <summary>
        ///     Remove existing rule
        /// </summary>
        /// <param name="id"></param>
        void RemoveNumericRule(Guid id);

        /// <summary>
        ///     Add a new rule
        /// </summary>
        /// <param name="rule"></param>
        void AddNumericRule(NumericDataExtractorRule rule);
    }
}