﻿/// <reference path="../typings/jquery/jquery.d.ts" />
/// <reference path="../typings/knockout/knockout.d.ts" />

// ReSharper disable InconsistentNaming

class Setting {
    Id: string;
    Code: string;
    Name: string;
    Value: string;
}

class SettingsViewModel {
    settings: any;

    constructor(settings: Setting[]) {
        this.settings = ko.observableArray(settings);
    }

    add(setting: Setting) {
        this.settings.push(setting);
    }

    remove(setting: Setting) {
        this.settings.remove(setting);
    }
}

class Host {
    Id: string;
    SeedUrl: string;

    constructor(url: string) {
        this.SeedUrl = url;
    }
}

class HostsViewModel {
    hosts: any;

    constructor(hosts: Host[]) {
        this.hosts = ko.observableArray(hosts);
    }

    add(host: Host) {
        this.hosts.push(host);
    }

    remove(host: Host) {
        this.hosts.remove(host);
    }
}

class Rule {
    Id: string;
    Name: string;
    DataType: string;
    RegExpression: string;

    constructor(id: string, name?: string, dataType?: string, expression?: string) {
        this.Id = id;
        if (name) this.Name = name;
        if (dataType) this.DataType = dataType;
        if (expression) this.RegExpression = expression;
    }
}

class RulesViewModel {
    rules: any;

    constructor(rules: Rule[]) {
        this.rules = ko.observableArray(rules);
    }

    add(rule: Rule) {
        this.rules.push(rule);
    }

    remove(rule: Rule) {
        this.rules.remove(rule);
    }
}

// ReSharper restore InconsistentNaming

class SettingsApi extends ServiceApi {

    viewModel: SettingsViewModel;

    constructor(baseServiceUrl: string, settingsViewModel: SettingsViewModel) {
        super(baseServiceUrl);
        this.viewModel = settingsViewModel;
    }

    load() {
        var url = this.serviceUrl + "/api/settings";
        this.getAjax(url, (data: Setting[]) => {
            if (data != null) {
                this.viewModel.settings(data);
            }
        });
    }

    save(setting: Setting, callback: () => any) {
        var jsonValue: string = JSON.stringify(setting);
        var url = this.serviceUrl + "/api/settings/" + setting.Id;
        this.putAjax(url, jsonValue, callback);
    }
}

class HostsApi extends ServiceApi {

    viewModel: HostsViewModel;

    constructor(baseServiceUrl: string, hostsViewModel: HostsViewModel) {
        super(baseServiceUrl);
        this.viewModel = hostsViewModel;
    }

    load() {
        var url = this.serviceUrl + "/api/hosts";
        this.getAjax(url, (data: Host[]) => {
            if (data != null) {
                this.viewModel.hosts(data);
            }
        });
    }
}

class RulesApi extends ServiceApi {

    viewModel: RulesViewModel;

    constructor(baseServiceUrl: string, rulesViewModel: RulesViewModel) {
        super(baseServiceUrl);
        this.viewModel = rulesViewModel;
    }

    load() {
        var url = this.serviceUrl + "/api/rules";
        this.getAjax(url, (data: Rule[]) => {
            if (data != null) {
                this.viewModel.rules(data);
            }
        });
    }
}