/// <reference path="../typings/jquery/jquery.d.ts" />
/// <reference path="../typings/knockout/knockout.d.ts" />
var ServiceApi = (function () {
    function ServiceApi(baseServiceUrl) {
        this.serviceUrl = baseServiceUrl;
    }
    ServiceApi.prototype.putAjax = function (url, jsonPayload, callback) {
        $.ajax({
            url: url,
            method: "PUT",
            data: jsonPayload,
            contentType: "application/json",
            success: function () { callback(); }
        });
    };
    ServiceApi.prototype.getAjax = function (url, callback) {
        $.get(url, callback);
    };
    return ServiceApi;
}());
//# sourceMappingURL=site.js.map