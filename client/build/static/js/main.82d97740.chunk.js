(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{28:function(e,t,a){e.exports=a(60)},51:function(e,t,a){},52:function(e,t,a){},60:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),l=a(11),c=a.n(l),o=a(1),s=a(25),i=a(3),d=a(2),p=a(4),m=function(e){function t(){var e,a;Object(o.a)(this,t);for(var r=arguments.length,l=new Array(r),c=0;c<r;c++)l[c]=arguments[c];return(a=Object(i.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(l)))).render=function(){return n.a.createElement("div",{className:"d-flex justify-content-center"},n.a.createElement("div",{className:"card d-flex justify-content-center",id:"current"},n.a.createElement("div",{className:"card-body"},n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-4"},n.a.createElement("div",{className:"details-seperator"})),n.a.createElement("div",{className:"col-4"},n.a.createElement("p",null,"current")),n.a.createElement("div",{className:"col-4"},n.a.createElement("div",{className:"details-seperator"}))),n.a.createElement("h1",{className:"card-title",id:"city"},a.props.city),n.a.createElement("p",{id:"date"},a.props.datetime),n.a.createElement("div",{id:"weather-text"},n.a.createElement("p",{id:"weather"},n.a.createElement("i",{className:a.props.icon}),"\xa0\xa0",a.props.weather)),n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-8 d-flex justify-content-end"},n.a.createElement("p",{id:"current-temp",className:"d-flex justify-content-end"},a.props.currenttemp," \xb0")),n.a.createElement("div",{className:"col-4",id:"low-high"},n.a.createElement("div",{className:"row"},n.a.createElement("div",{id:"low-temp"},n.a.createElement("p",{id:"low-temp-text"},a.props.lowtemp,"\u2109"))),n.a.createElement("div",{className:"row"},n.a.createElement("div",{id:"high-temp"},n.a.createElement("p",null,a.props.hightemp,"\u2109"))))))))},a}return Object(p.a)(t,e),t}(n.a.Component),u=function(e){function t(){var e,a;Object(o.a)(this,t);for(var r=arguments.length,l=new Array(r),c=0;c<r;c++)l[c]=arguments[c];return(a=Object(i.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(l)))).render=function(){return n.a.createElement("div",null,n.a.createElement("div",{className:"d-flex justify-content-center"},n.a.createElement("div",{className:"card d-flex justify-content-center",id:"details"},n.a.createElement("div",{className:"card-body"},n.a.createElement("div",{className:"hidden-card"},n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-4"},n.a.createElement("div",{className:"details-seperator"})),n.a.createElement("div",{className:"col-4"},n.a.createElement("p",null,"details")),n.a.createElement("div",{className:"col-4"},n.a.createElement("div",{className:"details-seperator"}))),n.a.createElement("div",{className:"row weather-row"},n.a.createElement("div",{className:"col-6 weather-blocks"},n.a.createElement("i",{className:"wi wi-strong-wind weather-icon"}),n.a.createElement("p",{className:"details-data"},"wind"),n.a.createElement("p",null,a.props.wind,"mph")),n.a.createElement("div",{className:"col-6 weather-blocks"},n.a.createElement("i",{className:"wi wi-humidity weather-icon"}),n.a.createElement("p",{className:"details-data"},"humidity"),n.a.createElement("p",null,a.props.humidity,"%"))),n.a.createElement("div",{className:"row weather-row"},n.a.createElement("div",{className:"col-6 weather-blocks"},n.a.createElement("i",{className:"wi wi-barometer weather-icon"}),n.a.createElement("p",{className:"details-data"},"pressure"),n.a.createElement("p",null,a.props.pressure,"in")),n.a.createElement("div",{className:"col-6 weather-blocks"},n.a.createElement("i",{className:"wi wi-cloud weather-icon"}),n.a.createElement("p",{className:"details-data"},"visibility"),n.a.createElement("p",null,a.props.visibility,"mi"))),n.a.createElement("div",{className:"row weather-row"},n.a.createElement("div",{className:"col-6 weather-blocks"},n.a.createElement("i",{className:"wi wi-sunrise weather-icon"}),n.a.createElement("p",{className:"details-data"},"sunrise"),n.a.createElement("p",null,a.props.sunrise)),n.a.createElement("div",{className:"col-6 weather-blocks"},n.a.createElement("i",{className:"wi wi-sunset weather-icon"}),n.a.createElement("p",{className:"details-data"},"sunset"),n.a.createElement("p",null,a.props.sunset))))))))},a}return Object(p.a)(t,e),t}(n.a.Component),E=function(e){function t(){var e,a;Object(o.a)(this,t);for(var r=arguments.length,l=new Array(r),c=0;c<r;c++)l[c]=arguments[c];return(a=Object(i.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(l)))).handleClick=function(e){if(e.preventDefault(),null===a.props.city)return!1;a.props.detailsToggle()},a.render=function(){return n.a.createElement("div",{className:"d-flex justify-content-center",onClick:function(e){return a.handleClick(e)}},n.a.createElement("div",{className:"card d-flex justify-content-center",id:"details"},n.a.createElement("div",{className:"card-body"},n.a.createElement("div",{className:"show-data"},n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-3"}),n.a.createElement("div",{className:"col-4"},n.a.createElement("p",{className:"toggle-button"},"details")),n.a.createElement("div",{className:"col-2"},n.a.createElement("p",{className:"toggle-button"},"+")),n.a.createElement("div",{className:"col-3"}))))))},a}return Object(p.a)(t,e),t}(n.a.Component),f=function(e){function t(){var e,a;Object(o.a)(this,t);for(var r=arguments.length,l=new Array(r),c=0;c<r;c++)l[c]=arguments[c];return(a=Object(i.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(l)))).render=function(){return n.a.createElement("div",null,n.a.createElement("div",{className:"d-flex justify-content-center"},n.a.createElement("div",{className:"card d-flex justify-content-center",id:"forecast"},n.a.createElement("div",{className:"card-body"},n.a.createElement("div",{className:"hidden-card"},n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-3"},n.a.createElement("div",{className:"details-seperator"})),n.a.createElement("div",{className:"col-6"},n.a.createElement("p",null,"forecast")),n.a.createElement("div",{className:"col-3"},n.a.createElement("div",{className:"details-seperator"}))),n.a.createElement("div",{className:"forecast-block"},a.props.forecast.map(function(e,t){return n.a.createElement("div",{className:"slot",key:t},n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-5"},n.a.createElement("p",{className:"forecast-date"},e.date)),n.a.createElement("div",{className:"col-3"},n.a.createElement("p",{className:"forecast-temp"},e.temp,"\xb0")),n.a.createElement("div",{className:"col-4"},n.a.createElement("i",{className:"forecast-icon ".concat(e.icon)}))))})))))))},a}return Object(p.a)(t,e),t}(n.a.Component),h=a(9),g=a.n(h),v=function(e){function t(){var e,a;Object(o.a)(this,t);for(var r=arguments.length,l=new Array(r),c=0;c<r;c++)l[c]=arguments[c];return(a=Object(i.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(l)))).handleClick=function(e){if(e.preventDefault(),null===a.props.city)return!1;g.a.post("/forecast",{city:a.props.city}).then(function(e){"string"===typeof e?(a.props.updateError(e),a.props.flagError(!0)):(a.props.updateForecast(e.data),a.props.forecastToggle())}).catch(function(e){return console.log("error retrieving forecast",e)})},a.render=function(){return n.a.createElement("div",{className:"d-flex justify-content-center",onClick:function(e){return a.handleClick(e)}},n.a.createElement("div",{className:"card d-flex justify-content-center",id:"details"},n.a.createElement("div",{className:"card-body"},n.a.createElement("div",{className:"show-data"},n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-2"}),n.a.createElement("div",{className:"col-5"},n.a.createElement("p",{className:"toggle-button"},"forecast")),n.a.createElement("div",{className:"col-2"},n.a.createElement("p",{className:"toggle-button"},"+")),n.a.createElement("div",{className:"col-3"}))))))},a}return Object(p.a)(t,e),t}(n.a.Component),w=function(e){function t(){var e,a;Object(o.a)(this,t);for(var r=arguments.length,l=new Array(r),c=0;c<r;c++)l[c]=arguments[c];return(a=Object(i.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(l)))).handleSubmit=function(e){e.preventDefault(),!0===a.props.isToggle&&a.props.toggleForecast(),!0===a.props.isDetails&&a.props.detailsToggle(),a.props.flagError(!1),a.props.updateError(""),a.props.updateLoading(),g.a.post("/search",{city:a.props.input}).then(function(e){a.props.updateLoading(),"error"===e.data?(a.props.flagError(!0),a.props.updateError("City does not exist"),a.props.loadData({city:null,datetime:null,currenttemp:null,lowtemp:null,hightemp:null,icon:null,weather:null,wind:null,humidity:null,pressure:null,visibility:null,sunrise:null,sunset:null}),console.log(e.data)):(a.props.loadData(e.data),a.props.submitClear())}).catch(function(e){return console.log("header error ",e)})},a.render=function(){return n.a.createElement("div",{className:"header"},n.a.createElement("nav",{className:"navbar"},n.a.createElement("div",{className:"d-flex justify-content-center w-100",id:"nav-container"},n.a.createElement("div",{className:"row w-100"},n.a.createElement("div",{className:"col-md-6 col-sm-12 d-flex justify-content-center"},n.a.createElement("a",{href:"/"},n.a.createElement("p",{className:"navbar-brand",id:"logo-text"},n.a.createElement("i",{className:"wi wi-sunrise",id:"logo-icon"}),"\xa0Weather "))),n.a.createElement("div",{className:"col-md-6 col-sm-12"},n.a.createElement("form",{className:"form-inline d-flex justify-content-center",onSubmit:function(e){return a.handleSubmit(e)}},n.a.createElement("div",{className:"input-group",id:"input"},n.a.createElement("input",{placeholder:"City or Zipcode","aria-label":"Search",onChange:function(e){return a.props.onKeyup(e)},value:a.props.input,id:"search-input",required:!0}),n.a.createElement("div",{className:"input-group-append"},n.a.createElement("button",{className:"btn",id:"search-btn",type:"submit"},"Search")))))))))},a}return Object(p.a)(t,e),t}(n.a.Component),y=function(e){return n.a.createElement("footer",{className:"w-100"},n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-6"},n.a.createElement("p",{className:"footer-link"},n.a.createElement("a",{href:"http://mmkepler.com",target:"_blank",rel:"noopener noreferrer"},"Melissa Kepler"))),n.a.createElement("div",{className:"col-6"},n.a.createElement("p",{className:"footer-link"},n.a.createElement("a",{href:"https://github.com/Missarachnid/open-weather",target:"_blank",rel:"noopener noreferrer"},"GitHub")))))},N=(a(50),a(24),a(51),a(52),a(12)),b={type:"WEATHER_UPDATE"},j={type:"INPUT_UPDATE"},O={type:"SUBMIT_CLEAR"},R={type:"SEARCH_ERROR"},T={type:"DETAILS_TOGGLE"},k={type:"FORECAST_TOGGLE"},C={type:"FORECAST_UPDATE"},x={type:"LOADING"},A={type:"ERROR_TEXT"},L=function(e){function t(){var e,a;Object(o.a)(this,t);for(var r=arguments.length,l=new Array(r),c=0;c<r;c++)l[c]=arguments[c];return(a=Object(i.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(l)))).render=function(){return n.a.createElement("div",{className:"container-fluid",id:"main-bg"},a.props.loading?n.a.createElement("div",{id:"notice"},n.a.createElement("div",{className:"spinner-grow spin",role:"status"},n.a.createElement("span",{className:"sr-only"},"Loading...")),n.a.createElement("div",{className:"spinner-grow spin",role:"status"},n.a.createElement("span",{className:"sr-only"},"Loading...")),n.a.createElement("div",{className:"spinner-grow spin",role:"status"},n.a.createElement("span",{className:"sr-only"},"Loading..."))):null,n.a.createElement(w,{input:a.props.input,onKeyup:a.props.onKeyup,submitClear:a.props.submitClear,loadData:a.props.loadData,flagError:a.props.flagError,updateLoading:a.props.updateLoading,toggleForecast:a.props.toggleForecast,isToggle:a.props.forecastToggle,updateError:a.props.updateError,detailsToggle:a.props.toggleDetails,isDetails:a.props.detailsToggle}),a.props.loading?n.a.createElement("div",{className:"modal",tabIndex:"-1",role:"dialog"},n.a.createElement("div",{className:"modal-dialog",role:"document"},n.a.createElement("div",{className:"modal-content"},n.a.createElement("div",{className:"modal-body"},n.a.createElement("div",{className:"spinner-border",role:"status"},n.a.createElement("span",{className:"sr-only"},"Loading...")))))):null,a.props.error?n.a.createElement("div",{id:"alert"},n.a.createElement("p",null,a.props.errortext)):null,n.a.createElement(m,{city:a.props.city,datetime:a.props.datetime,icon:a.props.icon,weather:a.props.weather,currenttemp:a.props.currenttemp,lowtemp:a.props.lowtemp,hightemp:a.props.hightemp}),a.props.detailsToggle?n.a.createElement(u,{wind:a.props.wind,humidity:a.props.humidity,pressure:a.props.pressure,visibility:a.props.visibility,sunrise:a.props.sunrise,sunset:a.props.sunset}):n.a.createElement(E,{detailsToggle:a.props.toggleDetails,city:a.props.city}),a.props.forecastToggle?n.a.createElement(f,{forecast:a.props.forecast}):n.a.createElement(v,{forecastToggle:a.props.toggleForecast,updateForecast:a.props.updateForecast,city:a.props.city,updateLoading:a.props.updateLoading,updateError:a.props.updateError}),n.a.createElement(y,null))},a}return Object(p.a)(t,e),Object(s.a)(t,[{key:"componentWillMount",value:function(){var e=this;navigator.geolocation?(this.props.updateLoading(),navigator.geolocation.getCurrentPosition(function(t){g.a.post("/find",{lat:t.coords.latitude,lon:t.coords.longitude}).then(function(t){e.props.loadData(t.data),e.props.updateLoading()}).catch(function(e){console.log("err",e)})},function(t){e.props.flagError(!0),e.props.updateError(t.message),e.props.updateLoading()})):this.props.updateLoading()}}]),t}(n.a.Component),D=Object(N.b)(function(e){return{city:e.weatherReducer.city,datetime:e.weatherReducer.datetime,currenttemp:e.weatherReducer.currenttemp,lowtemp:e.weatherReducer.lowtemp,hightemp:e.weatherReducer.hightemp,icon:e.weatherReducer.icon,weather:e.weatherReducer.weather,wind:e.weatherReducer.wind,humidity:e.weatherReducer.humidity,pressure:e.weatherReducer.pressure,visibility:e.weatherReducer.visibility,sunrise:e.weatherReducer.sunrise,sunset:e.weatherReducer.sunset,input:e.inputReducer.input,error:e.inputReducer.error,detailsToggle:e.weatherReducer.detailsToggle,forecastToggle:e.weatherReducer.forecastToggle,forecast:e.forecastReducer.forecast,loading:e.weatherReducer.loading,errortext:e.inputReducer.errortext}},function(e){return{loadData:function(t){e({type:b,payload:t})},onKeyup:function(t){e({type:j,payload:t})},submitClear:function(){e({type:O})},flagError:function(t){e({type:R,payload:t})},toggleDetails:function(){e({type:T})},toggleForecast:function(){e({type:k})},updateForecast:function(t){e({type:C,payload:t})},updateLoading:function(){e({type:x})},updateError:function(t){e({type:A,payload:t})}}})(L),S=a(10),F=a(6),W={city:null,datetime:null,currenttemp:null,lowtemp:null,hightemp:null,icon:null,weather:null,wind:null,humidity:null,pressure:null,visibility:null,sunrise:null,sunset:null,input:"",error:!1,detailsToggle:!1,forecastToggle:!1,forecast:[],loading:!1,errortext:""},_=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:W,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case b:return Object(F.a)({},e,{city:t.payload.city,datetime:t.payload.datetime,currenttemp:t.payload.currenttemp,lowtemp:t.payload.lowtemp,hightemp:t.payload.hightemp,icon:t.payload.icon,weather:t.payload.weather,wind:t.payload.wind,humidity:t.payload.humidity,pressure:t.payload.pressure,visibility:t.payload.visibility,sunrise:t.payload.sunrise,sunset:t.payload.sunset});case T:return Object(F.a)({},e,{detailsToggle:!e.detailsToggle});case k:return Object(F.a)({},e,{forecastToggle:!e.forecastToggle});case x:return Object(F.a)({},e,{loading:!e.loading});default:return e}},U=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:W,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case j:return Object(F.a)({},e,{input:t.payload.target.value});case O:return Object(F.a)({},e,{input:""});case R:return Object(F.a)({},e,{error:t.payload});case A:return Object(F.a)({},e,{errortext:t.payload});default:return e}},P=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:W,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case C:return Object(F.a)({},e,{forecast:t.payload});default:return e}},G=Object(S.b)({weatherReducer:_,inputReducer:U,forecastReducer:P}),I=Object(S.c)(G),K=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function M(e,t){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var a=e.installing;null!=a&&(a.onstatechange=function(){"installed"===a.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}}).catch(function(e){console.error("Error during service worker registration:",e)})}c.a.render(n.a.createElement(N.a,{store:I},n.a.createElement(D,null)),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",function(){var t="".concat("","/sw.js");K?(function(e,t){fetch(e).then(function(a){var r=a.headers.get("content-type");404===a.status||null!=r&&-1===r.indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):M(e,t)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(t,e),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")})):M(t,e)})}}()}},[[28,1,2]]]);
//# sourceMappingURL=main.82d97740.chunk.js.map