class Fs1{readFileSync(e,r=(e,r)=>{}){let t=null;const s=new XMLHttpRequest;return s.open("GET",e,!1),s.send(),200==s.status||304==s.status?(t=s.responseText,r(null,t)):(t=s.status,r(t,null)),t}promises={readFile(e,u=(e,r)=>{}){return new Promise((r,t)=>{const s=new XMLHttpRequest;s.open("get",e,!0),s.onload=()=>{var e=s.status;200==e||304==e?(u(null,s.response),r(s.response)):(u(s.status,null),t(e))},s.send()})}};constructor(){for(var key in this.promises)eval("this."+key+' = this.promises["'+key+'"]')}}class Path{constructor(){console.log("")}resolve(){let s="",u=0;return Array.prototype.forEach.call(arguments,e=>{u+=1;let r="",t="/";1==u&&(r="/"),u==arguments.length&&(t=""),s+=""+r+e+t}),s}}let requireroutes={"@node":{fs:new Fs1,path:new Path}};function webrequire(e){for(var r in requireroutes){var t=requireroutes[r].constructor==={}.constructor,s=e.split("/"),u=void 0===requireroutes[r].main,o=requireroutes.hasOwnProperty(s[0])&&requireroutes[s[0]].hasOwnProperty(s[1]);if(r===e&&!t)return requireroutes[r];if(t&&r===e&&u)return requireroutes[r];if(t&&r===e&&!u)return requireroutes[r].main;if(o)return requireroutes[s[0]][s[1]]}}const require=webrequire;class requireModule{id=null;get exports(){return requireroutes[this.id.toString()]}set exports(e){requireroutes[this.id.toString()]=e}}function preparedModule(e,r=0){return e.id=r,requireroutes[r.toString()]="Cow Mother",e}const module=preparedModule(new requireModule,0);
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZzLmpzIiwicGF0aC5qcyIsIm1vZHVsZXMuanMiXSwibmFtZXMiOlsiRnMxIiwicmVhZEZpbGVTeW5jIiwibmFtZSIsImZ1bmMiLCJzdGF0IiwicmVzIiwibGV0IiwicmVzdWx0IiwieG1saHR0cCIsIlhNTEh0dHBSZXF1ZXN0Iiwib3BlbiIsInNlbmQiLCJzdGF0dXMiLCJyZXNwb25zZVRleHQiLCJwcm9taXNlcyIsInJlYWRGaWxlIiwiUHJvbWlzZSIsInJlc29sdmUiLCJyZWplY3QiLCJ4aHIiLCJvbmxvYWQiLCJyZXNwb25zZSIsImNvbnN0cnVjdG9yIiwia2V5IiwidGhpcyIsImV2YWwiLCJQYXRoIiwiY29uc29sZSIsImxvZyIsImFyZ3N0cmluZyIsImFyZ251bSIsIkFycmF5IiwicHJvdG90eXBlIiwiZm9yRWFjaCIsImNhbGwiLCJhcmd1bWVudHMiLCJlbGVtZW50Iiwic2xhc2giLCJzbGFzaDIiLCJsZW5ndGgiLCJyZXF1aXJlcm91dGVzIiwiQG5vZGUiLCJmcyIsInBhdGgiLCJ3ZWJyZXF1aXJlIiwiaXNqc29uIiwic2xhc2hzcGxpdCIsInNwbGl0Iiwibm9tYWluIiwibWFpbiIsImhhc2RhdCIsImhhc093blByb3BlcnR5IiwicmVxdWlyZSIsInJlcXVpcmVNb2R1bGUiLCJpZCIsImV4cG9ydHMiLCJ0b1N0cmluZyIsInZhbCIsInByZXBhcmVkTW9kdWxlIiwibW9kIiwibW9kdWxlIl0sIm1hcHBpbmdzIjoiTUFBTUEsSUFDRkMsYUFBYUMsRUFBTUMsRUFBSyxDQUFDQyxFQUFNQyxRQUMzQkMsSUFBSUMsRUFBUyxLQUNiLE1BQU1DLEVBQVUsSUFBSUMsZUFXcEIsT0FWQUQsRUFBUUUsS0FBSyxNQUFPUixHQUFBQSxHQUNwQk0sRUFBUUcsT0FDWSxLQUFoQkgsRUFBUUksUUFBK0IsS0FBaEJKLEVBQVFJLFFBQ2pDTCxFQUFTQyxFQUFRSyxhQUNqQlYsRUFBSyxLQUFNSSxLQUdUQSxFQUFTQyxFQUFRSSxPQUNqQlQsRUFBS0ksRUFBUSxPQUVWQSxFQUVYTyxTQUFXLENBQ1BDLFNBQVNiLEVBQU1DLEVBQUssQ0FBQ0MsRUFBTUMsUUFDdkIsT0FBTyxJQUFJVyxRQUFRLENBQUNDLEVBQVNDLEtBQ3pCLE1BQU1DLEVBQU0sSUFBSVYsZUFDaEJVLEVBQUlULEtBQUssTUFBT1IsR0FBQUEsR0FDaEJpQixFQUFJQyxPQUFTLEtBQ1QsSUFBTVIsRUFBU08sRUFBSVAsT0FDTCxLQUFWQSxHQUEyQixLQUFWQSxHQUNqQlQsRUFBSyxLQUFNZ0IsRUFBSUUsVUFDZkosRUFBUUUsRUFBSUUsWUFFWmxCLEVBQUtnQixFQUFJUCxPQUFRLE1BQ2pCTSxFQUFPTixLQUdmTyxFQUFJUixXQUloQlcsY0FDSSxJQUFLaEIsSUFBSWlCLE9BQU9DLEtBQUtWLFNBQ2pCVyxLQUFLLFFBQVVGLElBQU0scUJBQXVCQSxJQUFNLGFDckN4REcsS0FDRkosY0FFSUssUUFBUUMsSUFBSSxJQUVoQlgsVUFDSVgsSUFBSXVCLEVBQVksR0FDWkMsRUFBUyxFQWFiLE9BWkFDLE1BQU1DLFVBQVVDLFFBQVFDLEtBQUtDLFVBQVdDLElBQ3BDTixHQUFVLEVBQ1Z4QixJQUFJK0IsRUFBUSxHQUNSQyxFQUFTLElBQ0MsR0FBVlIsSUFDQU8sRUFBUSxLQUVSUCxHQUFVSyxVQUFVSSxTQUNwQkQsRUFBUyxJQUViVCxHQUFhLEdBQUdRLEVBQVFELEVBQVVFLElBRS9CVCxHQ2xCZnZCLElBQUlrQyxjQUFnQixDQUNoQkMsUUFBUyxDQUNMQyxHQUFNLElBQUkxQyxJQUNWMkMsS0FBUSxJQUFJakIsT0FJcEIsU0FBU2tCLFdBQVcxQyxHQUNoQixJQUFLSSxJQUFJaUIsS0FBT2lCLGNBQWUsQ0FDM0JsQyxJQUFJdUMsRUFBU0wsY0FBY2pCLEdBQUtELGNBQWdCLEdBQUtBLFlBQ2pEd0IsRUFBYTVDLEVBQUs2QyxNQUFNLEtBQ3hCQyxPQUFBQSxJQUFTUixjQUFjakIsR0FBVzBCLEtBQ2xDQyxFQUFTVixjQUFjVyxlQUFlTCxFQUFXLEtBQU9OLGNBQWNNLEVBQVcsSUFBSUssZUFBZUwsRUFBVyxJQUNuSCxHQUFJdkIsSUFBUXJCLElBQVMyQyxFQUNqQixPQUFPTCxjQUFjakIsR0FFcEIsR0FBSXNCLEdBQVV0QixJQUFRckIsR0FBUThDLEVBQy9CLE9BQU9SLGNBQWNqQixHQUVwQixHQUFJc0IsR0FBVXRCLElBQVFyQixJQUFTOEMsRUFDaEMsT0FBT1IsY0FBY2pCLEdBQVcwQixLQUUvQixHQUFJQyxFQUNMLE9BQU9WLGNBQWNNLEVBQVcsSUFBSUEsRUFBVyxLQUszRCxNQUFNTSxRQUFVUixpQkFHVlMsY0FDRkMsR0FBSyxLQUNMQyxjQUNJLE9BQU9mLGNBQWNoQixLQUFLOEIsR0FBR0UsWUFFakNELFlBQVlFLEdBQ1JqQixjQUFjaEIsS0FBSzhCLEdBQUdFLFlBQWNDLEdBSTVDLFNBQVNDLGVBQWVDLEVBQUtMLEVBQUcsR0FHNUIsT0FGQUssRUFBSUwsR0FBS0EsRUFDVGQsY0FBY2MsRUFBR0UsWUFBYyxhQUN4QkcsRUFHWCxNQUFNQyxPQUFTRixlQUFlLElBQUlMLGNBQWlCIiwiZmlsZSI6Im1haW4uYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY2xhc3MgRnMxIHtcclxuICAgIHJlYWRGaWxlU3luYyhuYW1lLCBmdW5jPShzdGF0LCByZXMpID0+IHt9KSB7XHJcbiAgICAgICAgbGV0IHJlc3VsdCA9IG51bGxcclxuICAgICAgICBjb25zdCB4bWxodHRwID0gbmV3IFhNTEh0dHBSZXF1ZXN0KClcclxuICAgICAgICB4bWxodHRwLm9wZW4oXCJHRVRcIiwgbmFtZSwgZmFsc2UpXHJcbiAgICAgICAgeG1saHR0cC5zZW5kKClcclxuICAgICAgICBpZiAoeG1saHR0cC5zdGF0dXM9PTIwMCB8fCB4bWxodHRwLnN0YXR1cz09MzA0KSB7XHJcbiAgICAgICAgICByZXN1bHQgPSB4bWxodHRwLnJlc3BvbnNlVGV4dFxyXG4gICAgICAgICAgZnVuYyhudWxsLCByZXN1bHQpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICByZXN1bHQgPSB4bWxodHRwLnN0YXR1c1xyXG4gICAgICAgICAgICBmdW5jKHJlc3VsdCwgbnVsbClcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHJlc3VsdFxyXG4gICAgfVxyXG4gICAgcHJvbWlzZXMgPSB7XHJcbiAgICAgICAgcmVhZEZpbGUobmFtZSwgZnVuYz0oc3RhdCwgcmVzKSA9PiB7fSkge1xyXG4gICAgICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgeGhyID0gbmV3IFhNTEh0dHBSZXF1ZXN0KClcclxuICAgICAgICAgICAgICAgIHhoci5vcGVuKCdnZXQnLCBuYW1lLCB0cnVlKVxyXG4gICAgICAgICAgICAgICAgeGhyLm9ubG9hZCA9ICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBzdGF0dXMgPSB4aHIuc3RhdHVzXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHN0YXR1cyA9PSAyMDAgfHwgc3RhdHVzID09IDMwNCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmdW5jKG51bGwsIHhoci5yZXNwb25zZSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZSh4aHIucmVzcG9uc2UpXHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZnVuYyh4aHIuc3RhdHVzLCBudWxsKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZWplY3Qoc3RhdHVzKVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHhoci5zZW5kKClcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICBmb3IgKGxldCBrZXkgaW4gdGhpcy5wcm9taXNlcykge1xyXG4gICAgICAgICAgICBldmFsKCd0aGlzLicgKyBrZXkgKyAnID0gdGhpcy5wcm9taXNlc1tcIicgKyBrZXkgKyAnXCJdJylcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iLCJjbGFzcyBQYXRoIHtcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIC8vIHRvIGJlIHdvcmtlZCBvblxyXG4gICAgICAgIGNvbnNvbGUubG9nKCcnKVxyXG4gICAgfVxyXG4gICAgcmVzb2x2ZSgvKiBhcmd1bWVudHMgZ28gaGVyZSAqLykge1xyXG4gICAgICAgIGxldCBhcmdzdHJpbmcgPSAnJ1xyXG4gICAgICAgIGxldCBhcmdudW0gPSAwXHJcbiAgICAgICAgQXJyYXkucHJvdG90eXBlLmZvckVhY2guY2FsbChhcmd1bWVudHMsIGVsZW1lbnQgPT4ge1xyXG4gICAgICAgICAgICBhcmdudW0gKz0gMVxyXG4gICAgICAgICAgICBsZXQgc2xhc2ggPSAnJ1xyXG4gICAgICAgICAgICBsZXQgc2xhc2gyID0gJy8nXHJcbiAgICAgICAgICAgIGlmIChhcmdudW0gPT0gMSkge1xyXG4gICAgICAgICAgICAgICAgc2xhc2ggPSAnLydcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoYXJnbnVtID09IGFyZ3VtZW50cy5sZW5ndGgpIHtcclxuICAgICAgICAgICAgICAgIHNsYXNoMiA9ICcnXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgYXJnc3RyaW5nICs9IGAke3NsYXNofSR7ZWxlbWVudH0ke3NsYXNoMn1gXHJcbiAgICAgICAgfSlcclxuICAgICAgICByZXR1cm4gYXJnc3RyaW5nXHJcbiAgICB9XHJcbn0iLCIvLyBJZiB3ZSB3YW50IG1vZHVsZXMgdG8gYWN0dWFsbHkgd29yaywgd2UnbGwgaGF2ZSB0byBpbXBvcnQgdGhlbSBoZXJlLlxyXG5cclxubGV0IHJlcXVpcmVyb3V0ZXMgPSB7XHJcbiAgICBcIkBub2RlXCI6IHtcclxuICAgICAgICBcImZzXCI6IG5ldyBGczEoKSxcclxuICAgICAgICBcInBhdGhcIjogbmV3IFBhdGgoKVxyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiB3ZWJyZXF1aXJlKG5hbWUpIHtcclxuICAgIGZvciAobGV0IGtleSBpbiByZXF1aXJlcm91dGVzKSB7XHJcbiAgICAgICAgbGV0IGlzanNvbiA9IHJlcXVpcmVyb3V0ZXNba2V5XS5jb25zdHJ1Y3RvciA9PT0gKHt9KS5jb25zdHJ1Y3RvclxyXG4gICAgICAgIGxldCBzbGFzaHNwbGl0ID0gbmFtZS5zcGxpdCgnLycpXHJcbiAgICAgICAgbGV0IG5vbWFpbiA9IHJlcXVpcmVyb3V0ZXNba2V5XVsnbWFpbiddID09PSB1bmRlZmluZWRcclxuICAgICAgICBsZXQgaGFzZGF0ID0gcmVxdWlyZXJvdXRlcy5oYXNPd25Qcm9wZXJ0eShzbGFzaHNwbGl0WzBdKSAmJiByZXF1aXJlcm91dGVzW3NsYXNoc3BsaXRbMF1dLmhhc093blByb3BlcnR5KHNsYXNoc3BsaXRbMV0pXHJcbiAgICAgICAgaWYgKGtleSA9PT0gbmFtZSAmJiAhaXNqc29uKSB7XHJcbiAgICAgICAgICAgIHJldHVybiByZXF1aXJlcm91dGVzW2tleV1cclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAoaXNqc29uICYmIGtleSA9PT0gbmFtZSAmJiBub21haW4pIHtcclxuICAgICAgICAgICAgcmV0dXJuIHJlcXVpcmVyb3V0ZXNba2V5XVxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmIChpc2pzb24gJiYga2V5ID09PSBuYW1lICYmICFub21haW4pIHtcclxuICAgICAgICAgICAgcmV0dXJuIHJlcXVpcmVyb3V0ZXNba2V5XVsnbWFpbiddXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKGhhc2RhdCkge1xyXG4gICAgICAgICAgICByZXR1cm4gcmVxdWlyZXJvdXRlc1tzbGFzaHNwbGl0WzBdXVtzbGFzaHNwbGl0WzFdXVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuY29uc3QgcmVxdWlyZSA9IHdlYnJlcXVpcmVcclxuXHJcbi8vIERPRVMgV09SS1xyXG5jbGFzcyByZXF1aXJlTW9kdWxlIHtcclxuICAgIGlkID0gbnVsbFxyXG4gICAgZ2V0IGV4cG9ydHMoKSB7XHJcbiAgICAgICAgcmV0dXJuIHJlcXVpcmVyb3V0ZXNbdGhpcy5pZC50b1N0cmluZygpXVxyXG4gICAgfVxyXG4gICAgc2V0IGV4cG9ydHModmFsKSB7XHJcbiAgICAgICAgcmVxdWlyZXJvdXRlc1t0aGlzLmlkLnRvU3RyaW5nKCldID0gdmFsXHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHByZXBhcmVkTW9kdWxlKG1vZCwgaWQ9MCkge1xyXG4gICAgbW9kLmlkID0gaWRcclxuICAgIHJlcXVpcmVyb3V0ZXNbaWQudG9TdHJpbmcoKV0gPSAnQ293IE1vdGhlcidcclxuICAgIHJldHVybiBtb2RcclxufVxyXG5cclxuY29uc3QgbW9kdWxlID0gcHJlcGFyZWRNb2R1bGUobmV3IHJlcXVpcmVNb2R1bGUoKSwgMCkiXX0=
