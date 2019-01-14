(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{128:function(e,t,a){"use strict";a.r(t);var i=a(153),n=a(0),r=a.n(n),s=a(138),o=a(133);a(143);t.default=function(){return r.a.createElement(s.a,null,r.a.createElement(o.StaticQuery,{query:"1319372690",render:function(e){return r.a.createElement(r.a.Fragment,null,console.log(e),r.a.createElement("div",{class:"position-relative overflow-hidden p-3 p-md-5 m-md-3 text-center bg-dark",style:{backgroundSize:"cover",backgroundPosition:"center",backgroundRepeat:"no-repeat",backgroundImage:'url("'+e.placeholderImage.childImageSharp.fluid.src+'")'}},r.a.createElement("div",{class:"col-md-5 p-lg-5 mx-auto my-5 text-white",style:{background:"rgba(0,0,0,0.8)"}},r.a.createElement("h1",{class:"display-5 font-weight-normal text-white"},"Never forget your resusable bags again"),r.a.createElement("p",{class:"lead font-weight-normal"}),r.a.createElement("a",{href:"https://itunes.apple.com/us/app/bagnag/id1446253855?ls=1&mt=8"},r.a.createElement("img",{style:{maxWidth:150},src:e.appBadge.childImageSharp.fluid.src})),r.a.createElement("a",{href:"https://play.google.com/store/apps/details?id=com.bagnag&ah=unlqAJrPHDmgYpLgZPipyt-iD6g"},r.a.createElement("img",{style:{maxWidth:150},src:e.playImage.childImageSharp.fluid.src})))))},data:i}),r.a.createElement("div",{class:"d-md-flex flex-md-equal w-100 my-md-3 pl-md-3"},r.a.createElement("div",{class:"bg-dark mr-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center text-white overflow-hidden"},r.a.createElement("div",{class:"my-3 py-3"},r.a.createElement("p",{class:"lead"},"The average Australian uses 170 plastic bags every year. 150 million of these bags end up as litter and only 3% are recycled. Worldwide the problem is even larger, with 2 million bags being used each minute."),r.a.createElement("p",null,"Enter Bag Nag. Bag Nag is a nifty new app that uses geofencing to help people remember to grab their green bags out of the car before going shopping at their local supermarket. Bag Nag can help people save time and money by preventing them from either having to walk back to their cars to retrieve forgotten bags, or purchase new bags at the checkout. Bag Nag also helps protect the environment, by ensuring people really are reusing their bags, instead of doubling up by purchasing bags that will just sit around the house and eventually end up in the garbage bin."),r.a.createElement("p",null,"Bag Nag is easy to use, you simply select your favourite Coles and Woolworths stores and whenever you come within 100m of a shopping centre you nominated, Bag Nag will send an alert to your phone, reminding you to bring your bags. There is no need to open the app, the reminder is automatic! Bag Nag costs the equivalent of one green bag purchase ($0.99) and will save you time and money, all whilst helping the environment.")))))}},133:function(e,t,a){"use strict";a.r(t),a.d(t,"graphql",function(){return f}),a.d(t,"StaticQueryContext",function(){return u}),a.d(t,"StaticQuery",function(){return g});var i=a(0),n=a.n(i),r=a(4),s=a.n(r),o=a(132),d=a.n(o);a.d(t,"Link",function(){return d.a}),a.d(t,"withPrefix",function(){return o.withPrefix}),a.d(t,"navigate",function(){return o.navigate}),a.d(t,"push",function(){return o.push}),a.d(t,"replace",function(){return o.replace}),a.d(t,"navigateTo",function(){return o.navigateTo});var l=a(134),c=a.n(l);a.d(t,"PageRenderer",function(){return c.a});var A=a(28);a.d(t,"parsePath",function(){return A.a});var u=n.a.createContext({}),g=function(e){return n.a.createElement(u.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):n.a.createElement("div",null,"Loading (StaticQuery)")})};function f(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}g.propTypes={data:s.a.object,query:s.a.string.isRequired,render:s.a.func,children:s.a.func}},134:function(e,t,a){var i;e.exports=(i=a(136))&&i.default||i},135:function(e){e.exports={data:{site:{siteMetadata:{title:"Bagnag"}}}}},136:function(e,t,a){"use strict";a.r(t);a(29);var i=a(0),n=a.n(i),r=a(4),s=a.n(r),o=a(46),d=a(2),l=function(e){var t=e.location,a=d.default.getResourcesForPathnameSync(t.pathname);return n.a.createElement(o.a,Object.assign({location:t,pageResources:a},a.json))};l.propTypes={location:s.a.shape({pathname:s.a.string.isRequired}).isRequired},t.default=l},137:function(e,t,a){},138:function(e,t,a){"use strict";var i=a(135),n=a(0),r=a.n(n),s=a(4),o=a.n(s),d=a(139),l=a.n(d),c=a(133),A=function(e){e.siteTitle;return r.a.createElement("nav",{class:"site-header sticky-top py-1"},r.a.createElement("div",{class:"container d-flex flex-column flex-md-row justify-content-between"},r.a.createElement(c.Link,{className:"py-2 d-none d-md-inline-block",to:"/"},"Download"),r.a.createElement(c.Link,{className:"py-2 d-none d-md-inline-block",to:"/about"},"About"),r.a.createElement(c.Link,{className:"py-2 d-none d-md-inline-block",to:"/privacy"},"Privacy")))};A.propTypes={siteTitle:o.a.string},A.defaultProps={siteTitle:""};var u=A,g=(a(140),a(137),function(e){var t=e.children;return r.a.createElement(c.StaticQuery,{query:"755544856",render:function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement(l.a,{title:e.site.siteMetadata.title,meta:[{name:"description",content:"Bagnag - Remember your green bags!"},{name:"keywords",content:"sample, something"}]},r.a.createElement("html",{lang:"en"})),r.a.createElement(u,{siteTitle:e.site.siteMetadata.title}),t)},data:i})});g.propTypes={children:o.a.node.isRequired};t.a=g},143:function(e,t,a){"use strict";var i=a(8);t.__esModule=!0,t.default=void 0;var n,r=i(a(6)),s=i(a(47)),o=i(a(141)),d=i(a(142)),l=i(a(0)),c=i(a(4)),A=function(e){var t=(0,d.default)({},e);return t.resolutions&&(t.fixed=t.resolutions,delete t.resolutions),t.sizes&&(t.fluid=t.sizes,delete t.sizes),t},u={},g=function(e){var t=A(e),a=t.fluid?t.fluid.src:t.fixed.src;return!!u[a]||(u[a]=!0,!1)},f=[];var p=function(e,t){(void 0===n&&"undefined"!=typeof window&&window.IntersectionObserver&&(n=new window.IntersectionObserver(function(e){e.forEach(function(e){f.forEach(function(t){t[0]===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(n.unobserve(t[0]),t[1]())})})},{rootMargin:"200px"})),n).observe(e),f.push([e,t])},b=function(e){var t=e.src?'src="'+e.src+'" ':'src="" ',a=e.sizes?'sizes="'+e.sizes+'" ':"",i=e.srcSetWebp?"<source type='image/webp' srcSet=\""+e.srcSetWebp+'" '+a+"/>":"",n=e.srcSet?'<source srcSet="'+e.srcSet+'" '+a+"/>":"",r=e.title?'title="'+e.title+'" ':"",s=e.alt?'alt="'+e.alt+'" ':'alt="" ',o=e.width?'width="'+e.width+'" ':"",d=e.height?'height="'+e.height+'" ':"",l=e.opacity?e.opacity:"1";return"<picture>"+i+n+"<img "+o+d+t+s+r+'style="position:absolute;top:0;left:0;transition:opacity 0.5s;transition-delay:'+(e.transitionDelay?e.transitionDelay:"0.5s")+";opacity:"+l+';width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'},h=l.default.forwardRef(function(e,t){var a=e.style,i=e.onLoad,n=e.onError,r=(0,o.default)(e,["style","onLoad","onError"]);return l.default.createElement("img",(0,d.default)({},r,{onLoad:i,onError:n,ref:t,style:(0,d.default)({position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},a)}))});h.propTypes={style:c.default.object,onError:c.default.func,onLoad:c.default.func};var m=function(e){function t(t){var a;a=e.call(this,t)||this;var i=!0,n=!0,r=!1,o=t.fadeIn,d=g(t);!d&&"undefined"!=typeof window&&window.IntersectionObserver&&(i=!1,n=!1,r=!0),"undefined"==typeof window&&(i=!1,n=!1),t.critical&&(i=!0,n=!1,r=!1);var c=!(a.props.critical&&!a.props.fadeIn);return a.state={isVisible:i,imgLoaded:n,IOSupported:r,fadeIn:o,hasNoScript:c,seenBefore:d},a.imageRef=l.default.createRef(),a.handleImageLoaded=a.handleImageLoaded.bind((0,s.default)((0,s.default)(a))),a.handleRef=a.handleRef.bind((0,s.default)((0,s.default)(a))),a}(0,r.default)(t,e);var a=t.prototype;return a.componentDidMount=function(){if(this.props.critical){var e=this.imageRef.current;e&&e.complete&&this.handleImageLoaded()}},a.handleRef=function(e){var t=this;this.state.IOSupported&&e&&p(e,function(){t.setState({isVisible:!0})})},a.handleImageLoaded=function(){this.setState({imgLoaded:!0}),this.state.seenBefore&&this.setState({fadeIn:!1}),this.props.onLoad&&this.props.onLoad()},a.render=function(){var e=A(this.props),t=e.title,a=e.alt,i=e.className,n=e.style,r=void 0===n?{}:n,s=e.imgStyle,o=void 0===s?{}:s,c=e.placeholderStyle,u=void 0===c?{}:c,g=e.placeholderClassName,f=e.fluid,p=e.fixed,m=e.backgroundColor,y=e.Tag,w="boolean"==typeof m?"lightgray":m,E=(0,d.default)({opacity:this.state.imgLoaded?0:1,transition:"opacity 0.5s",transitionDelay:this.state.imgLoaded?"0.5s":"0.25s"},o,u),v=(0,d.default)({opacity:this.state.imgLoaded||!1===this.state.fadeIn?1:0,transition:!0===this.state.fadeIn?"opacity 0.5s":"none"},o),S={title:t,alt:this.state.isVisible?"":a,style:E,className:g};if(f){var B=f;return l.default.createElement(y,{className:(i||"")+" gatsby-image-wrapper",style:(0,d.default)({position:"relative",overflow:"hidden"},r),ref:this.handleRef,key:"fluid-"+JSON.stringify(B.srcSet)},l.default.createElement(y,{style:{width:"100%",paddingBottom:100/B.aspectRatio+"%"}}),B.base64&&l.default.createElement(h,(0,d.default)({src:B.base64},S)),B.tracedSVG&&l.default.createElement(h,(0,d.default)({src:B.tracedSVG},S)),w&&l.default.createElement(y,{title:t,style:{backgroundColor:w,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,transitionDelay:"0.35s",right:0,left:0}}),this.state.isVisible&&l.default.createElement("picture",null,B.srcSetWebp&&l.default.createElement("source",{type:"image/webp",srcSet:B.srcSetWebp,sizes:B.sizes}),l.default.createElement("source",{srcSet:B.srcSet,sizes:B.sizes}),l.default.createElement(h,{alt:a,title:t,src:B.src,style:v,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError})),this.state.hasNoScript&&l.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:b((0,d.default)({alt:a,title:t},B))}}))}if(p){var x=p,I=(0,d.default)({position:"relative",overflow:"hidden",display:"inline-block",width:x.width,height:x.height},r);return"inherit"===r.display&&delete I.display,l.default.createElement(y,{className:(i||"")+" gatsby-image-wrapper",style:I,ref:this.handleRef,key:"fixed-"+JSON.stringify(x.srcSet)},x.base64&&l.default.createElement(h,(0,d.default)({src:x.base64},S)),x.tracedSVG&&l.default.createElement(h,(0,d.default)({src:x.tracedSVG},S)),w&&l.default.createElement(y,{title:t,style:{backgroundColor:w,width:x.width,opacity:this.state.imgLoaded?0:1,transitionDelay:"0.25s",height:x.height}}),this.state.isVisible&&l.default.createElement("picture",null,x.srcSetWebp&&l.default.createElement("source",{type:"image/webp",srcSet:x.srcSetWebp,sizes:x.sizes}),l.default.createElement("source",{srcSet:x.srcSet,sizes:x.sizes}),l.default.createElement(h,{alt:a,title:t,width:x.width,height:x.height,src:x.src,style:v,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError})),this.state.hasNoScript&&l.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:b((0,d.default)({alt:a,title:t,width:x.width,height:x.height},x))}}))}return null},t}(l.default.Component);m.defaultProps={critical:!1,fadeIn:!0,alt:"",Tag:"div"};var y=c.default.shape({width:c.default.number.isRequired,height:c.default.number.isRequired,src:c.default.string.isRequired,srcSet:c.default.string.isRequired,base64:c.default.string,tracedSVG:c.default.string,srcWebp:c.default.string,srcSetWebp:c.default.string}),w=c.default.shape({aspectRatio:c.default.number.isRequired,src:c.default.string.isRequired,srcSet:c.default.string.isRequired,sizes:c.default.string.isRequired,base64:c.default.string,tracedSVG:c.default.string,srcWebp:c.default.string,srcSetWebp:c.default.string});m.propTypes={resolutions:y,sizes:w,fixed:y,fluid:w,fadeIn:c.default.bool,title:c.default.string,alt:c.default.string,className:c.default.oneOfType([c.default.string,c.default.object]),critical:c.default.bool,style:c.default.object,imgStyle:c.default.object,placeholderStyle:c.default.object,placeholderClassName:c.default.string,backgroundColor:c.default.oneOfType([c.default.string,c.default.bool]),onLoad:c.default.func,onError:c.default.func,Tag:c.default.string};var E=m;t.default=E},153:function(e){e.exports={data:{placeholderImage:{childImageSharp:{fluid:{base64:"data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAANABQDASIAAhEBAxEB/8QAGAAAAgMAAAAAAAAAAAAAAAAAAAQCAwX/xAAVAQEBAAAAAAAAAAAAAAAAAAABAv/aAAwDAQACEAMQAAABUjqVQojxZ//EABoQAAMAAwEAAAAAAAAAAAAAAAABAgMEEhP/2gAIAQEAAQUCV5bHWZJbDS8OSpdC1IP/xAAXEQADAQAAAAAAAAAAAAAAAAAQESFh/9oACAEDAQE/AYtH/8QAFhEAAwAAAAAAAAAAAAAAAAAAEBEi/9oACAECAQE/AbY//8QAHRAAAgICAwEAAAAAAAAAAAAAAAECESEiMWFxkf/aAAgBAQAGPwLEY+szGPwpqvDWVISvjo2bbP/EABsQAAMAAwEBAAAAAAAAAAAAAAABESExQWGB/9oACAEBAAE/IYjeuk1iw2LyDOGXMBx+RKK2L6EFYM3R/9oADAMBAAIAAwAAABDAz//EABcRAAMBAAAAAAAAAAAAAAAAAAABQWH/2gAIAQMBAT8QcQtP/8QAFxEBAAMAAAAAAAAAAAAAAAAAARARMf/aAAgBAgEBPxBcAqP/xAAeEAACAQQDAQAAAAAAAAAAAAABEQAhMXGBQVFhsf/aAAgBAQABPxAUB2QIyYBTPdJanDCWIsQYSwsdLbgqYkwHhdwsaxTfE//Z",aspectRatio:1.5,src:"/bagnag-website/static/2f462f98a2639e2108545174b6f503b3/ae05c/boot.jpeg",srcSet:"/bagnag-website/static/2f462f98a2639e2108545174b6f503b3/263e2/boot.jpeg 480w,\n/bagnag-website/static/2f462f98a2639e2108545174b6f503b3/6de71/boot.jpeg 960w,\n/bagnag-website/static/2f462f98a2639e2108545174b6f503b3/ae05c/boot.jpeg 1920w,\n/bagnag-website/static/2f462f98a2639e2108545174b6f503b3/1d5e6/boot.jpeg 2880w,\n/bagnag-website/static/2f462f98a2639e2108545174b6f503b3/81993/boot.jpeg 3513w",sizes:"(max-width: 1920px) 100vw, 1920px"}}},playImage:{childImageSharp:{fluid:{base64:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAICAYAAAD5nd/tAAAACXBIWXMAAC4jAAAuIwF4pT92AAABiklEQVQoz62QTUsCYRDHHza1Tc11Zdf2tfASbCq+rFIeBAMlJInM6OILGCke9Av4JTz4CcztVhAPHevQZ+pQMofp6Sk8dHbgBzPM8J+ZPyEbDFVVCcm57rWhyE+aL7iw9rSlZemepumeZVleIpHwbNvmsGFP13WOaZocli81TVuy/kO1WnW4qilJTySVxa1uGVnJ2dkRsVKpYCaT4aTTaazX6+j3+9cz/3Fd95YLGqKwIGdtJB/4WX69gYtjAsQXhEbjHGKxGLAREEURFEWBaDTK62QyCWwRzxlfP4L5fL7DBW2/cE+u2njyvvp6uzuFeomAtX8I3W4HxuMxjEYj6Pf7MBgMYD6fQ6/Xg+FwCLPZDKbT6U+9kiQJHcf5FdyLRh6DRy5eJo8x9Hf+diDA3ywUClgqlbBYLOJkMsFWq4XsOoxEIsh847Y0m00UBAFzudzvy1m30LYU5XVXlp5V26QHtkGZ0ZS9R8Ph8BrDMCgT4sTjccrsoKFQiMqyTJn4S61WS5FNB1tMvgGQy5VRug/iSQAAAABJRU5ErkJggg==",aspectRatio:2.584,src:"/bagnag-website/static/db9b21a1c41f3dcd9731e1e7acfdbb57/9471d/google-play-badge.png",srcSet:"/bagnag-website/static/db9b21a1c41f3dcd9731e1e7acfdbb57/80d80/google-play-badge.png 50w,\n/bagnag-website/static/db9b21a1c41f3dcd9731e1e7acfdbb57/d95c5/google-play-badge.png 100w,\n/bagnag-website/static/db9b21a1c41f3dcd9731e1e7acfdbb57/9471d/google-play-badge.png 200w,\n/bagnag-website/static/db9b21a1c41f3dcd9731e1e7acfdbb57/81840/google-play-badge.png 300w,\n/bagnag-website/static/db9b21a1c41f3dcd9731e1e7acfdbb57/6f2db/google-play-badge.png 400w,\n/bagnag-website/static/db9b21a1c41f3dcd9731e1e7acfdbb57/81a68/google-play-badge.png 600w,\n/bagnag-website/static/db9b21a1c41f3dcd9731e1e7acfdbb57/4ed51/google-play-badge.png 646w",sizes:"(max-width: 200px) 100vw, 200px"}}},appBadge:{childImageSharp:{fluid:{base64:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAGCAYAAADDl76dAAAACXBIWXMAAAsSAAALEgHS3X78AAABVUlEQVQY021RS4rCQBBtfyAJIv4/iCAuNIK4CZhoIAFBcCWCIgpuFdFLCAnkFjmK4BU8gVeYIbux33QVbgZm0dSrqlePV9Wi3++/KpUKisXiu1aryUajgXK5jFarhWazybharaJer3NUHK7TDGHi0Rzl7Xb7SxAQQshkMontdgvP8yjHcDhkbNs2xuMxFosFLMvCZDLBYDCA4zgwDAOu6zJP0zSZSCQglIN3NpvF8/mUAGQURSxYKpXQ6/WICOrruo5CoYDpdMpO8/k8UqkU0uk09diQ4kmhVpW5XA5xHJMgHo8HC5IT3/fZATlfr9cwTRP7/R7H4xHL5RK73Y7rh8NBdjodKIdS0G1o5cvlgvv9jjAMWZCcrFYrBEGA0+mE2+2G0WiE+XzOQpvNBufzGbPZDNfrFd1uV9KcUAf+ZqBEP/HPow/IZDL43Bq02j88nlWr//wC0xO5j+EgoskAAAAASUVORK5CYII=",aspectRatio:3.3755274261603376,src:"/bagnag-website/static/8efd61b44ab6090d0f256146cc872045/9471d/app-store-badge.png",srcSet:"/bagnag-website/static/8efd61b44ab6090d0f256146cc872045/80d80/app-store-badge.png 50w,\n/bagnag-website/static/8efd61b44ab6090d0f256146cc872045/d95c5/app-store-badge.png 100w,\n/bagnag-website/static/8efd61b44ab6090d0f256146cc872045/9471d/app-store-badge.png 200w,\n/bagnag-website/static/8efd61b44ab6090d0f256146cc872045/81840/app-store-badge.png 300w,\n/bagnag-website/static/8efd61b44ab6090d0f256146cc872045/6f2db/app-store-badge.png 400w,\n/bagnag-website/static/8efd61b44ab6090d0f256146cc872045/81a68/app-store-badge.png 600w,\n/bagnag-website/static/8efd61b44ab6090d0f256146cc872045/b53d3/app-store-badge.png 800w",sizes:"(max-width: 200px) 100vw, 200px"}}}}}}}]);
//# sourceMappingURL=component---src-pages-index-js-0bcb72b0dae0caad49db.js.map