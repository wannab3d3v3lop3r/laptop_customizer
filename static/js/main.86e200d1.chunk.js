(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{14:function(e,t,a){},16:function(e,t,a){},18:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(7),s=a.n(c),o=(a(14),a(1)),u=a(2),m=a(4),l=a(3),i=a(5),d=(a(16),a(8));function p(e){return r.a.createElement("li",{className:"feature__item"},r.a.createElement("div",{className:e.featureClass,onClick:function(t){return e.updateFeature(e.computerItem,e.item)}},e.item.name,"(",new Intl.NumberFormat("en-US",{style:"currency",currency:"USD"}).format(e.item.cost),")"))}function f(e){var t=e.features,a=e.selected,n=e.updateFeature;return r.a.createElement("section",{className:"main__form"},r.a.createElement("h3",null,"TECH SPECS AND CUSTOMIZATIONS"),Object.entries(t).map(function(e,t){var c=Object(d.a)(e,2),s=c[0],o=c[1].map(function(e,t){var c=e.name===a[s].name?"feature__selected":"";return r.a.createElement(p,{key:"".concat(s," ").concat(t),item:e,computerItem:s,featureClass:"feature__option ".concat(c),updateFeature:n})});return r.a.createElement("div",{className:"feature",key:s},r.a.createElement("div",{className:"feature__name"},s),r.a.createElement("ul",{className:"feature__list"},o))}))}p.defaultProps={featureClass:"",updateFeature:function(){},item:{},computerItem:""};var y=function(e){function t(){return Object(o.a)(this,t),Object(m.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(i.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this.props,t=e.item,a=e.selected;return r.a.createElement("div",{className:"summary__option",key:t},r.a.createElement("div",{className:"summary__option__label"},t,"  "),r.a.createElement("div",{className:"summary__option__value"},a[t].name),r.a.createElement("div",{className:"summary__option__cost"},new Intl.NumberFormat("en-US",{style:"currency",currency:"USD"}).format(a[t].cost)))}}]),t}(n.Component),h=function(e){function t(){return Object(o.a)(this,t),Object(m.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(i.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this.props.selected,t=Object.keys(e).reduce(function(t,a){return t+e[a].cost},0);return r.a.createElement("div",{className:"summary__total"},r.a.createElement("div",{className:"summary__total__label"},"Your Price: "),r.a.createElement("div",{className:"summary__total__value"},new Intl.NumberFormat("en-US",{style:"currency",currency:"USD"}).format(t)))}}]),t}(n.Component),_=function(e){function t(){return Object(o.a)(this,t),Object(m.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(i.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this.props.selected;return r.a.createElement("section",{className:"main__summary"},r.a.createElement("h3",null,"NEW GREENLEAF 2018"),Object.keys(e).map(function(t,a){return r.a.createElement(y,{key:a,item:t,selected:e})}),r.a.createElement(h,{selected:e}))}}]),t}(n.Component),b=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(m.a)(this,Object(l.a)(t).call(this,e))).updateFeature=function(e,t){var n=Object.assign({},a.state.selected);n[e]=t,a.setState({selected:n})},a.state={selected:{Processor:{name:"17th Generation Intel Core HB (7 Core with donut spare)",cost:700},"Operating System":{name:"Ubuntu Linux 16.04",cost:200},"Video Card":{name:"Toyota Corolla 1.5v",cost:1150.98},Display:{name:'15.6" UHD (3840 x 2160) 60Hz Bright Lights and Knobs',cost:1500}}},a}return Object(i.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement("header",null,r.a.createElement("h1",null,"ELF Computing"),r.a.createElement("h3",null,"Laptops"),r.a.createElement("h5",null,"Customize your laptop")),r.a.createElement("main",null,r.a.createElement(f,{features:this.props.features,updateFeature:this.updateFeature,selected:this.state.selected}),r.a.createElement(_,{selected:this.state.selected})))}}]),t}(n.Component);s.a.render(r.a.createElement(b,{features:{Processor:[{name:"17th Generation Intel Core HB (7 Core with donut spare)",cost:700},{name:"Professor X AMD Fire Breather with sidewinder technology",cost:1200}],"Operating System":[{name:"Ubuntu Linux 16.04",cost:200},{name:"Bodhi Linux",cost:300}],"Video Card":[{name:"Toyota Corolla 1.5v",cost:1150.98},{name:"Mind mild breeze 2000",cost:1345}],Display:[{name:'15.6" UHD (3840 x 2160) 60Hz Bright Lights and Knobs',cost:1500},{name:'15.3" HGTV (3840 x 2160) Home makeover edition',cost:1400}]}}),document.getElementById("root"))},9:function(e,t,a){e.exports=a(18)}},[[9,2,1]]]);
//# sourceMappingURL=main.86e200d1.chunk.js.map