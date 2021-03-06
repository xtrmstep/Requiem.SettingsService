﻿/// <reference path="../typings/jquery/jquery.d.ts" />
/// <reference path="../typings/knockout/knockout.d.ts" />

class ServiceApi {
    serviceUrl: string;

    constructor(baseServiceUrl: string) {
        this.serviceUrl = baseServiceUrl;
    }

    postAjax(url: string, jsonPayload: string, callback: (data: any) => any) {
        $.ajax({
            url: url,
            method: "POST",
            data: jsonPayload,
            contentType: "application/json",
            success(result: any) { callback(result); }
        });
    }

    putAjax(url: string, jsonPayload: string, callback: () => any) {
        $.ajax({
            url: url,
            method: "PUT",
            data: jsonPayload,
            contentType: "application/json",
            success() { callback(); }
        });
    }

    deleteAjax(url: string, callback: () => any) {
        $.ajax({
            url: url,
            method: "DELETE",
            success() { callback(); }
        });
    }

    getAjax(url: string, callback: (data: any) => any) {
        $.get(url, callback);
    }
}