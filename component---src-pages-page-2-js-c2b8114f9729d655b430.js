(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{136:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),i=t(140),c=t(146);a.default=function(){return r.a.createElement(c.a,null,r.a.createElement("h1",null,"Hi from the second page"),r.a.createElement("p",null,"Welcome to page 2"),r.a.createElement(i.Link,{to:"/"},"Go back to the homepage"))}},140:function(e,a,t){"use strict";t.r(a),t.d(a,"graphql",function(){return m}),t.d(a,"StaticQueryContext",function(){return g}),t.d(a,"StaticQuery",function(){return p});var n=t(0),r=t.n(n),i=t(4),c=t.n(i),o=t(139),s=t.n(o);t.d(a,"Link",function(){return s.a}),t.d(a,"withPrefix",function(){return o.withPrefix}),t.d(a,"navigate",function(){return o.navigate}),t.d(a,"push",function(){return o.push}),t.d(a,"replace",function(){return o.replace}),t.d(a,"navigateTo",function(){return o.navigateTo});var l=t(141),d=t.n(l);t.d(a,"PageRenderer",function(){return d.a});var u=t(32);t.d(a,"parsePath",function(){return u.a});var g=r.a.createContext({}),p=function(e){return r.a.createElement(g.Consumer,null,function(a){return e.data||a[e.query]&&a[e.query].data?(e.render||e.children)(e.data?e.data.data:a[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};function m(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}p.propTypes={data:c.a.object,query:c.a.string.isRequired,render:c.a.func,children:c.a.func}},141:function(e,a,t){var n;e.exports=(n=t(143))&&n.default||n},142:function(e){e.exports={data:{site:{siteMetadata:{title:"Bagnag"}}}}},143:function(e,a,t){"use strict";t.r(a);t(33);var n=t(0),r=t.n(n),i=t(4),c=t.n(i),o=t(51),s=t(2),l=function(e){var a=e.location,t=s.default.getResourcesForPathnameSync(a.pathname);return r.a.createElement(o.a,Object.assign({location:a,pageResources:t},t.json))};l.propTypes={location:c.a.shape({pathname:c.a.string.isRequired}).isRequired},a.default=l},144:function(e){e.exports={data:{placeholderImage:{childImageSharp:{fluid:{base64:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAAsSAAALEgHS3X78AAADtUlEQVQ4y62UW2yURRTHS2IgPmxpIzXSvbR7/baUVpq6bSgxKHZbqcBCQqBqbUttKr3F0stCu18pNKVcFtFQ8H4J2NRCjFGqtF0xMT4QQ+KDTz6Y8KCJiPGC7m4X2dKfZ7ZLWw34ID6czHxnzvy+/5mZc1LC+gqiAU3M/Z8tkhg1ftdXkqImsR7n/2AOwoEcBXQnHFMB1x0tpkYVcytOAf4ZIz6V7d+AsQWbF0KiYtflO947u/6nPh8T+zfgVGAeFJV5ROZhsek+jT/EN/a0iQ8qjVz1O4gKNJz8WeyOCmWMqAAJvrFHgz1O6HZwucHC2+sz+LUli29l/n1jFugO6BHVCbW3AcZ6ZqWjAjrsfLPXRLDXwZNteZRWO/CUGantK+CZnRo1TW7qB4tpabDydZOF6V4tkdUcUMlW6cUlzZFns6kJ2OkYd1H4Yj4plTlknHyE9N0eljQ/iGGwhCV9qyl+s4Ajl4xMtJmY6dYSjDngTK9TzknUddjYNvAQqZObSR9aw+Jmjcz9RWSNlmHoziO9zo12fiOmdx9n6HMLoV8yeb/FxE0BqqMKBwSo0vzyOTuXWiXVVgs1x0owjD5G82vtvDV8HMfxdeS+sYFXRofYFqzCdNaLcaSCAxesnLuSybk2M0hm8YCNiFL4U5eTE8E+JkIf812dlR3HPFjGttIfPIB3u5/MrhIaPuykpnGQ1FVrsL7+MJlnNjAwkc3YVQG2LidUm0tnmZ1rSmFkt5XLwa2EvphkqLGQmoFVmENbWObzkFL7Eve94KXgxFoMjXtZ5PdjHxHgiAAns/n0x/tpej6fJypKaavz8XNAzjyq53DDb+arnUZ8u/JwHS4he3wT2e+VYz9bgfWdUswjXpYfXI1FLsce8iXW6k878b68gvpdGk95XBTZirjizxWFycJmv4CbLWyXSzHKpThPeUkrNZEWKCS9IReDKw3bsBfXJxsxnypn3wUbJy+aOVObQVf5o3SuXccPXdr8OwzrGjfbrVQeKebeyS08MO5jkTeLHfek8uriZbirVrL0M/Gf38TS4fX4PzJz8aiJ3zpcUpY22GdFZTsHVKUU99s5KLI3Hyqi+rDY0WL6qzT6q93Uqe9DHqpk9OkFnG6TB+0XmOyLSlFEul2zz2au9JI1qaDTonRG3qSyqYBDmoGUWZeo6LQlsoi325gWQEy/1UAWlF5kYXOQhaiMUSmlqK4lVCd8SoGuLOlX68n427QvLdEc77bBXhdGRDVY1bZVp1X0uzEFu6bn8xfgqr+sK/L2owAAAABJRU5ErkJggg==",aspectRatio:1,src:"/bagnag-website/static/795d42846ad98e6e4b440a3243da3ca1/cb80b/icon.png",srcSet:"/bagnag-website/static/795d42846ad98e6e4b440a3243da3ca1/c8b22/icon.png 8w,\n/bagnag-website/static/795d42846ad98e6e4b440a3243da3ca1/94b4e/icon.png 15w,\n/bagnag-website/static/795d42846ad98e6e4b440a3243da3ca1/cb80b/icon.png 30w,\n/bagnag-website/static/795d42846ad98e6e4b440a3243da3ca1/45e8a/icon.png 45w,\n/bagnag-website/static/795d42846ad98e6e4b440a3243da3ca1/f48a8/icon.png 60w,\n/bagnag-website/static/795d42846ad98e6e4b440a3243da3ca1/076dc/icon.png 90w,\n/bagnag-website/static/795d42846ad98e6e4b440a3243da3ca1/ad212/icon.png 1024w",sizes:"(max-width: 30px) 100vw, 30px"}}}}}},145:function(e,a,t){},146:function(e,a,t){"use strict";var n=t(142),r=t(0),i=t.n(r),c=t(4),o=t.n(c),s=t(152),l=t.n(s),d=t(140),u=t(7),g=t.n(u),p=t(50),m=t.n(p),b=t(144),f=t(179),h=t(180),y=t(181),w=t(185),A=t(182),E=t(183),q=t(184),k=t(147),v=t.n(k),S=function(e){function a(a){var t;return(t=e.call(this,a)||this).toggle=t.toggle.bind(m()(m()(t))),t.state={isOpen:!1},t}g()(a,e);var t=a.prototype;return t.toggle=function(){this.setState({isOpen:!this.state.isOpen})},t.render=function(){return i.a.createElement("div",null,i.a.createElement(f.a,{className:"site-header",dark:!0,expand:"md"},i.a.createElement(h.a,{tag:d.Link,to:"/"},i.a.createElement(d.StaticQuery,{query:"3947431164",render:function(e){return i.a.createElement(v.a,{style:{width:35,height:35,marginRight:8},fluid:e.placeholderImage.childImageSharp.fluid,className:"d-inline-block align-bottom"})},data:b}),"BagNag"),i.a.createElement(y.a,{onClick:this.toggle}),i.a.createElement(w.a,{isOpen:this.state.isOpen,navbar:!0},i.a.createElement(A.a,{className:"ml-auto",navbar:!0},i.a.createElement(E.a,null,i.a.createElement(q.a,{to:"/",tag:d.Link},"Home")),i.a.createElement(E.a,null,i.a.createElement(q.a,{to:"/about",tag:d.Link},"About")),i.a.createElement(E.a,null,i.a.createElement(q.a,{tag:d.Link,to:"/privacy"},"Privacy"))))))},a}(i.a.Component);S.propTypes={siteTitle:o.a.string},S.defaultProps={siteTitle:""};t(153),t(145);var L=function(e){var a=e.children;return i.a.createElement(d.StaticQuery,{query:"755544856",render:function(e){return i.a.createElement(i.a.Fragment,null,i.a.createElement(l.a,{title:e.site.siteMetadata.title,meta:[{name:"description",content:"Bagnag - Remember your green bags!"},{name:"keywords",content:"sample, something"}]},i.a.createElement("html",{lang:"en"})),i.a.createElement(S,{siteTitle:e.site.siteMetadata.title}),a)},data:n})};L.propTypes={children:o.a.node.isRequired};a.a=L}}]);
//# sourceMappingURL=component---src-pages-page-2-js-c2b8114f9729d655b430.js.map