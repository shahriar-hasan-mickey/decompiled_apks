!function(t){function i(t,i,e){for(var s,h=t.length-1;h>=0;h--)if(s=i/(t[h]*Math.pow(10,e)),4==s||5==s)return s-1;return null}function e(i,e,s){s=s||{},s.axesDefaults=s.axesDefaults||{},s.legend=s.legend||{},s.seriesDefaults=s.seriesDefaults||{},s.grid=s.grid||{};var h=!1;if(s.seriesDefaults.renderer==t.jqplot.MeterGaugeRenderer)h=!0;else if(s.series)for(var n=0;n<s.series.length;n++)s.series[n].renderer==t.jqplot.MeterGaugeRenderer&&(h=!0);h&&(s.axesDefaults.renderer=t.jqplot.MeterGaugeAxisRenderer,s.legend.renderer=t.jqplot.MeterGaugeLegendRenderer,s.legend.preDraw=!0,s.grid.background=s.grid.background||"white",s.grid.drawGridlines=!1,s.grid.borderWidth=null!=s.grid.borderWidth?s.grid.borderWidth:0,s.grid.shadow=null!=s.grid.shadow?s.grid.shadow:!1)}function s(t){}t.jqplot.MeterGaugeRenderer=function(){t.jqplot.LineRenderer.call(this)},t.jqplot.MeterGaugeRenderer.prototype=new t.jqplot.LineRenderer,t.jqplot.MeterGaugeRenderer.prototype.constructor=t.jqplot.MeterGaugeRenderer,t.jqplot.MeterGaugeRenderer.prototype.init=function(e){if(this.diameter=null,this.padding=null,this.shadowOffset=2,this.shadowAlpha=.07,this.shadowDepth=4,this.background="#efefef",this.ringColor="#BBC6D0",this.needleColor="#C3D3E5",this.tickColor="989898",this.ringWidth=null,this.min,this.max,this.ticks=[],this.showTicks=!0,this.showTickLabels=!0,this.label=null,this.labelHeightAdjust=0,this.labelPosition="inside",this.intervals=[],this.intervalColors=["#4bb2c5","#EAA228","#c5b47f","#579575","#839557","#958c12","#953579","#4b5de4","#d8b83f","#ff5800","#0085cc","#c747a3","#cddf54","#FBD178","#26B4E3","#bd70c7"],this.intervalInnerRadius=null,this.intervalOuterRadius=null,this.tickRenderer=t.jqplot.MeterGaugeTickRenderer,this.tickPositions=[1,2,2.5,5,10],this.tickSpacing=30,this.numberMinorTicks=null,this.hubRadius=null,this.tickPadding=null,this.needleThickness=null,this.needlePad=6,this.pegNeedle=!0,this._type="meterGauge",t.extend(!0,this,e),this.type=null,this.numberTicks=null,this.tickInterval=null,this.span=180,"circular"==this.type?this.semiCircular=!1:"circular"!=this.type?this.semiCircular=!0:this.semiCircular=this.span<=180?!0:!1,this._tickPoints=[],this._labelElem=null,this.startAngle=(90+(360-this.span)/2)*Math.PI/180,this.endAngle=(90-(360-this.span)/2)*Math.PI/180,this.setmin=!(null!=this.min),this.setmax=!(null!=this.max),this.intervals.length)if(null==this.intervals[0].length||1==this.intervals.length)for(var s=0;s<this.intervals.length;s++)this.intervals[s]=[this.intervals[s],this.intervals[s],this.intervalColors[s]];else if(2==this.intervals[0].length)for(s=0;s<this.intervals.length;s++)this.intervals[s]=[this.intervals[s][0],this.intervals[s][1],this.intervalColors[s]];if(this.ticks.length){if(null==this.ticks[0].length||1==this.ticks[0].length)for(var s=0;s<this.ticks.length;s++)this.ticks[s]=[this.ticks[s],this.ticks[s]];this.min=null==this.min?this.ticks[0][0]:this.min,this.max=null==this.max?this.ticks[this.ticks.length-1][0]:this.max,this.setmin=!1,this.setmax=!1,this.numberTicks=this.ticks.length,this.tickInterval=this.ticks[1][0]-this.ticks[0][0],this.tickFactor=Math.floor(parseFloat((Math.log(this.tickInterval)/Math.log(10)).toFixed(11))),this.numberMinorTicks=i(this.tickPositions,this.tickInterval,this.tickFactor),this.numberMinorTicks||(this.numberMinorTicks=i(this.tickPositions,this.tickInterval,this.tickFactor-1)),this.numberMinorTicks||(this.numberMinorTicks=1)}else this.intervals.length?(this.min=null==this.min?0:this.min,this.setmin=!1,null==this.max?this.intervals[this.intervals.length-1][0]>=this.data[0][1]&&(this.max=this.intervals[this.intervals.length-1][0],this.setmax=!1):this.setmax=!1):(this.min=null==this.min?0:this.min,this.setmin=!1,null==this.max?(this.max=1.25*this.data[0][1],this.setmax=!0):this.setmax=!1)},t.jqplot.MeterGaugeRenderer.prototype.setGridData=function(t){for(var i=[],e=[],s=(this.startAngle,0);s<this.data.length;s++)i.push(this.data[s][1]),e.push([this.data[s][0]]),s>0&&(i[s]+=i[s-1]);for(var h=2*Math.PI/i[i.length-1],s=0;s<i.length;s++)e[s][1]=i[s]*h;this.gridData=e},t.jqplot.MeterGaugeRenderer.prototype.makeGridData=function(t,i){for(var e=[],s=[],h=(this.startAngle,0);h<t.length;h++)e.push(t[h][1]),s.push([t[h][0]]),h>0&&(e[h]+=e[h-1]);for(var n=2*Math.PI/e[e.length-1],h=0;h<e.length;h++)s[h][1]=e[h]*n;return s},t.jqplot.MeterGaugeRenderer.prototype.draw=function(e,s,h){var n,r=void 0!=h?h:{},a=0,l=0,o=1;if(h.legendInfo&&"inside"==h.legendInfo.placement){var d=h.legendInfo;switch(d.location){case"nw":a=d.width+d.xoffset;break;case"w":a=d.width+d.xoffset;break;case"sw":a=d.width+d.xoffset;break;case"ne":a=d.width+d.xoffset,o=-1;break;case"e":a=d.width+d.xoffset,o=-1;break;case"se":a=d.width+d.xoffset,o=-1;break;case"n":l=d.height+d.yoffset;break;case"s":l=d.height+d.yoffset,o=-1}}this.label&&(this._labelElem=t('<div class="jqplot-meterGauge-label" style="position:absolute;">'+this.label+"</div>"),this.canvas._elem.after(this._labelElem));var c=(void 0!=r.shadow?r.shadow:this.shadow,void 0!=r.showLine?r.showLine:this.showLine,void 0!=r.fill?r.fill:this.fill,e.canvas.width),u=e.canvas.height;null==this.padding&&(this.padding=Math.round(Math.min(c,u)/30));var g=c-a-2*this.padding,k=u-l-2*this.padding;"bottom"==this.labelPosition&&this.label&&(k-=this._labelElem.outerHeight(!0));var p=Math.min(g,k),m=p;if(this.diameter||(this.semiCircular?(g>=2*k?(this.ringWidth||(this.ringWidth=2*k/35),this.needleThickness=this.needleThickness||2+Math.pow(this.ringWidth,.8),this.innerPad=this.ringWidth/2+this.needleThickness/2+this.needlePad,this.diameter=2*(k-2*this.innerPad)):(this.ringWidth||(this.ringWidth=g/35),this.needleThickness=this.needleThickness||2+Math.pow(this.ringWidth,.8),this.innerPad=this.ringWidth/2+this.needleThickness/2+this.needlePad,this.diameter=g-2*this.innerPad-this.ringWidth-this.padding),this._center=[(c-o*a)/2+o*a,u+o*l-this.padding-this.ringWidth-this.innerPad]):(this.ringWidth||(this.ringWidth=m/35),this.needleThickness=this.needleThickness||2+Math.pow(this.ringWidth,.8),this.innerPad=0,this.diameter=m-this.ringWidth,this._center=[(c-o*a)/2+o*a,(u-o*l)/2+o*l])),this._labelElem&&"bottom"==this.labelPosition&&(this._center[1]-=this._labelElem.outerHeight(!0)),this._radius=this.diameter/2,this.tickSpacing=6e3/this.diameter,this.hubRadius||(this.hubRadius=this.diameter/18),this.shadowOffset=.5+this.ringWidth/9,this.shadowWidth=1*this.ringWidth,this.tickPadding=3+Math.pow(this.diameter/20,.7),this.tickOuterRadius=this._radius-this.ringWidth/2-this.tickPadding,this.tickLength=this.showTicks?this._radius/13:0,0==this.ticks.length){var f=this.max,b=this.min,v=this.setmax,M=this.setmin,T=(f-b)*this.tickSpacing/this.span,P=Math.floor(parseFloat((Math.log(T)/Math.log(10)).toFixed(11))),w=T/Math.pow(10,P);w=w>2&&2.5>=w?2.5:Math.ceil(w);var R,x,_=this.tickPositions;for(n=0;n<_.length;n++)(w==_[n]||n&&_[n-1]<w&&w<_[n])&&(T=_[n]*Math.pow(10,P),R=n);for(n=0;n<_.length;n++)(w==_[n]||n&&_[n-1]<w&&w<_[n])&&(T=_[n]*Math.pow(10,P),x=Math.ceil((f-b)/T));if(v&&M){var j=b>0?b-b%T:b-b%T-T;if(!this.forceZero){var q=Math.min(b-j,.8*T),I=Math.floor(q/_[R]);I>1&&(j+=_[R]*(I-1),parseInt(j,10)!=j&&parseInt(j-_[R],10)==j-_[R]&&(j-=_[R]))}b==j?b-=T:b-j>.23*T?b=j:(b=j-T,x+=1),x+=1;var y=b+(x-1)*T;f>=y&&(y+=T,x+=1),.23*T>y-f&&(y+=T,x+=1),this.max=f=y,this.min=b,this.tickInterval=T,this.numberTicks=x;var G;for(n=0;x>n;n++)G=parseFloat((b+n*T).toFixed(11)),this.ticks.push([G,G]);this.max=this.ticks[x-1][1],this.tickFactor=P,this.numberMinorTicks=i(this.tickPositions,this.tickInterval,this.tickFactor),this.numberMinorTicks||(this.numberMinorTicks=i(this.tickPositions,this.tickInterval,this.tickFactor-1))}else if(v){var y=b+(x-1)*T;f>=y?(f=y+T,x+=1):f=y,this.tickInterval=this.tickInterval||T,this.numberTicks=this.numberTicks||x;var G;for(n=0;n<this.numberTicks;n++)G=parseFloat((b+n*this.tickInterval).toFixed(11)),this.ticks.push([G,G]);this.max=this.ticks[this.numberTicks-1][1],this.tickFactor=P,this.numberMinorTicks=i(this.tickPositions,this.tickInterval,this.tickFactor),this.numberMinorTicks||(this.numberMinorTicks=i(this.tickPositions,this.tickInterval,this.tickFactor-1))}if(!v&&!M){var W=this.max-this.min;P=Math.floor(parseFloat((Math.log(W)/Math.log(10)).toFixed(11)))-1;var A,L,C=[5,6,4,7,3,8,9,10,2],F=0;if(W>1){var S=String(W);if(-1==S.search(/\./)){var D=S.search(/0+$/);F=D>0?S.length-D-1:0}}for(L=W/Math.pow(10,F),n=0;n<C.length;n++)if(A=L/(C[n]-1),A==parseInt(A,10)){this.numberTicks=C[n],this.tickInterval=W/(this.numberTicks-1),this.tickFactor=P+1;break}var G;for(n=0;n<this.numberTicks;n++)G=parseFloat((this.min+n*this.tickInterval).toFixed(11)),this.ticks.push([G,G]);if(this.numberMinorTicks=i(this.tickPositions,this.tickInterval,this.tickFactor),this.numberMinorTicks||(this.numberMinorTicks=i(this.tickPositions,this.tickInterval,this.tickFactor-1)),!this.numberMinorTicks){this.numberMinorTicks=1;var E=[4,5,3,6,2];for(n=0;5>n;n++){var O=this.tickInterval/E[n];if(O==parseInt(O,10)){this.numberMinorTicks=E[n]-1;break}}}}}var H=this._radius,B=this.startAngle,z=this.endAngle;Math.PI,Math.PI/2;if(this.semiCircular){var N=Math.atan(this.innerPad/H),J=this.outerStartAngle=B-N,Q=this.outerEndAngle=z+N,Z=this.hubStartAngle=B-Math.atan(this.innerPad/this.hubRadius*2),$=this.hubEndAngle=z+Math.atan(this.innerPad/this.hubRadius*2);e.save(),e.translate(this._center[0],this._center[1]),e.lineJoin="round",e.lineCap="round",e.save(),e.beginPath(),e.fillStyle=this.background,e.arc(0,0,H,J,Q,!1),e.closePath(),e.fill(),e.restore();var K="rgba(0,0,0,"+this.shadowAlpha+")";e.save();for(var n=0;n<this.shadowDepth;n++)e.translate(this.shadowOffset*Math.cos(this.shadowAngle/180*Math.PI),this.shadowOffset*Math.sin(this.shadowAngle/180*Math.PI)),e.beginPath(),e.strokeStyle=K,e.lineWidth=this.shadowWidth,e.arc(0,0,H,J,Q,!1),e.closePath(),e.stroke();e.restore(),e.save();for(var U=parseInt((this.shadowDepth+1)/2,10),n=0;U>n;n++)e.translate(this.shadowOffset*Math.cos(this.shadowAngle/180*Math.PI),this.shadowOffset*Math.sin(this.shadowAngle/180*Math.PI)),e.beginPath(),e.fillStyle=K,e.arc(0,0,this.hubRadius,Z,$,!1),e.closePath(),e.fill();if(e.restore(),e.save(),e.beginPath(),e.strokeStyle=this.ringColor,e.lineWidth=this.ringWidth,e.arc(0,0,H,J,Q,!1),e.closePath(),e.stroke(),e.restore(),e.save(),e.beginPath(),e.fillStyle=this.ringColor,e.arc(0,0,this.hubRadius,Z,$,!1),e.closePath(),e.fill(),e.restore(),this.showTicks){e.save();var V=this.tickOuterRadius,X=this.tickLength,Y=X/2,tt=this.numberMinorTicks,it=this.span*Math.PI/180/(this.ticks.length-1),et=it/(tt+1);for(n=0;n<this.ticks.length;n++){e.beginPath(),e.lineWidth=1.5+this.diameter/360,e.strokeStyle=this.ringColor;if(e.moveTo(-V*Math.cos(it*n+B),V*Math.sin(it*n+B)),e.lineTo(-(V-X)*Math.cos(it*n+B),(V-X)*Math.sin(it*n+B)),this._tickPoints.push([(V-X)*Math.cos(it*n+B)+this._center[0]+this.canvas._offsets.left,(V-X)*Math.sin(it*n+B)+this._center[1]+this.canvas._offsets.top,it*n+B]),e.stroke(),e.lineWidth=1+this.diameter/440,n<this.ticks.length-1)for(var st=1;tt>=st;st++)e.beginPath(),e.moveTo(-V*Math.cos(it*n+et*st+B),V*Math.sin(it*n+et*st+B)),e.lineTo(-(V-Y)*Math.cos(it*n+et*st+B),(V-Y)*Math.sin(it*n+et*st+B)),e.stroke()}e.restore()}if(this.showTickLabels){var ht,nt,_,rt,at,lt,ot=0,w=this.tickPadding*(1-1/(this.diameter/80+1));for(n=0;n<this.ticks.length;n++)ht=t('<div class="jqplot-meterGauge-tick" style="position:absolute;">'+this.ticks[n][1]+"</div>"),this.canvas._elem.after(ht),rt=ht.outerWidth(!0),at=ht.outerHeight(!0),nt=this._tickPoints[n][0]-rt*(this._tickPoints[n][2]-Math.PI)/Math.PI-w*Math.cos(this._tickPoints[n][2]),_=this._tickPoints[n][1]-at/2+at/2*Math.pow(Math.abs(Math.sin(this._tickPoints[n][2])),.5)+w/3*Math.pow(Math.abs(Math.sin(this._tickPoints[n][2])),.5),ht.css({left:nt,top:_}),lt=rt*Math.cos(this._tickPoints[n][2])+at*Math.sin(Math.PI/2+this._tickPoints[n][2]/2),ot=lt>ot?lt:ot}if(this.label&&"inside"==this.labelPosition){var nt=this._center[0]+this.canvas._offsets.left,w=this.tickPadding*(1-1/(this.diameter/80+1)),_=.5*(this._center[1]+this.canvas._offsets.top-this.hubRadius)+.5*(this._center[1]+this.canvas._offsets.top-this.tickOuterRadius+this.tickLength+w)+this.labelHeightAdjust;nt-=this._labelElem.outerWidth(!0)/2,_-=this._labelElem.outerHeight(!0)/2,this._labelElem.css({left:nt,top:_})}else if(this.label&&"bottom"==this.labelPosition){var nt=this._center[0]+this.canvas._offsets.left-this._labelElem.outerWidth(!0)/2,_=this._center[1]+this.canvas._offsets.top+this.innerPad+ +this.ringWidth+this.padding+this.labelHeightAdjust;this._labelElem.css({left:nt,top:_})}e.save();var dt=this.intervalInnerRadius||1.5*this.hubRadius;if(null==this.intervalOuterRadius)if(this.showTickLabels)var ct=this.tickOuterRadius-this.tickLength-this.tickPadding-this.diameter/8;else var ct=this.tickOuterRadius-this.tickLength-this.diameter/16;else var ct=this.intervalOuterRadius;var ut,gt,W=this.max-this.min,kt=(this.intervals[this.intervals.length-1]-this.min,this.span*Math.PI/180);for(n=0;n<this.intervals.length;n++)ut=0==n?B:B+(this.intervals[n-1][0]-this.min)*kt/W,0>ut&&(ut=0),gt=B+(this.intervals[n][0]-this.min)*kt/W,0>gt&&(gt=0),e.beginPath(),e.fillStyle=this.intervals[n][2],e.arc(0,0,dt,ut,gt,!1),e.lineTo(ct*Math.cos(gt),ct*Math.sin(gt)),e.arc(0,0,ct,gt,ut,!0),e.lineTo(dt*Math.cos(ut),dt*Math.sin(ut)),e.closePath(),e.fill();e.restore();var pt=this.data[0][1],mt=this.max-this.min;this.pegNeedle&&(this.data[0][1]>this.max+3*mt/this.span&&(pt=this.max+3*mt/this.span),this.data[0][1]<this.min-3*mt/this.span&&(pt=this.min-3*mt/this.span));var ft=(pt-this.min)/mt*this.span*Math.PI/180+this.startAngle;e.save(),e.beginPath(),e.fillStyle=this.ringColor,e.strokeStyle=this.ringColor,this.needleLength=.85*(this.tickOuterRadius-this.tickLength),this.needleThickness=this.needleThickness<2?2:this.needleThickness;for(var bt,vt=.4*this.needleThickness,Mt=this.needleLength/10,Tt=(this.needleThickness-vt)/10,n=0;10>n;n++)bt=this.needleThickness-n*Tt,e.moveTo(Mt*n*Math.cos(ft),Mt*n*Math.sin(ft)),e.lineWidth=bt,e.lineTo(Mt*(n+1)*Math.cos(ft),Mt*(n+1)*Math.sin(ft)),e.stroke();e.restore()}else this._center=[(c-o*a)/2+o*a,(u-o*l)/2+o*l]},t.jqplot.MeterGaugeAxisRenderer=function(){t.jqplot.LinearAxisRenderer.call(this)},t.jqplot.MeterGaugeAxisRenderer.prototype=new t.jqplot.LinearAxisRenderer,t.jqplot.MeterGaugeAxisRenderer.prototype.constructor=t.jqplot.MeterGaugeAxisRenderer,t.jqplot.MeterGaugeAxisRenderer.prototype.init=function(i){this.tickRenderer=t.jqplot.MeterGaugeTickRenderer,t.extend(!0,this,i),this._dataBounds={min:0,max:100},this.min=0,this.max=100,this.showTicks=!1,this.ticks=[],this.showMark=!1,this.show=!1},t.jqplot.MeterGaugeLegendRenderer=function(){t.jqplot.TableLegendRenderer.call(this)},t.jqplot.MeterGaugeLegendRenderer.prototype=new t.jqplot.TableLegendRenderer,t.jqplot.MeterGaugeLegendRenderer.prototype.constructor=t.jqplot.MeterGaugeLegendRenderer,t.jqplot.MeterGaugeLegendRenderer.prototype.init=function(i){this.numberRows=null,this.numberColumns=null,t.extend(!0,this,i)},t.jqplot.MeterGaugeLegendRenderer.prototype.draw=function(){if(this.show){var i=this._series,e="position:absolute;";e+=this.background?"background:"+this.background+";":"",e+=this.border?"border:"+this.border+";":"",e+=this.fontSize?"font-size:"+this.fontSize+";":"",e+=this.fontFamily?"font-family:"+this.fontFamily+";":"",e+=this.textColor?"color:"+this.textColor+";":"",e+=null!=this.marginTop?"margin-top:"+this.marginTop+";":"",e+=null!=this.marginBottom?"margin-bottom:"+this.marginBottom+";":"",e+=null!=this.marginLeft?"margin-left:"+this.marginLeft+";":"",e+=null!=this.marginRight?"margin-right:"+this.marginRight+";":"",this._elem=t('<table class="jqplot-table-legend" style="'+e+'"></table>');var s,h,n=!1,r=!1,a=i[0];if(a.show){var l=a.data;this.numberRows?(s=this.numberRows,h=this.numberColumns?this.numberColumns:Math.ceil(l.length/s)):this.numberColumns?(h=this.numberColumns,s=Math.ceil(l.length/this.numberColumns)):(s=l.length,h=1);var o,d,c,u,g,k,p,m,f=0;for(o=0;s>o;o++)for(c=r?t('<tr class="jqplot-table-legend"></tr>').prependTo(this._elem):t('<tr class="jqplot-table-legend"></tr>').appendTo(this._elem),d=0;h>d;d++)f<l.length&&(k=this.labels[f]||l[f][0].toString(),m=a.color,n=r?o==s-1?!1:!0:o>0?!0:!1,p=n?this.rowSpacing:"0",u=t('<td class="jqplot-table-legend" style="text-align:center;padding-top:'+p+';"><div><div class="jqplot-table-legend-swatch" style="border-color:'+m+';"></div></div></td>'),g=t('<td class="jqplot-table-legend" style="padding-top:'+p+';"></td>'),this.escapeHtml?g.text(k):g.html(k),r?(g.prependTo(c),u.prependTo(c)):(u.appendTo(c),g.appendTo(c)),n=!0),f++}}return this._elem},t.jqplot.preInitHooks.push(e),t.jqplot.postParseOptionsHooks.push(s),t.jqplot.MeterGaugeTickRenderer=function(){t.jqplot.AxisTickRenderer.call(this)},t.jqplot.MeterGaugeTickRenderer.prototype=new t.jqplot.AxisTickRenderer,t.jqplot.MeterGaugeTickRenderer.prototype.constructor=t.jqplot.MeterGaugeTickRenderer}(jQuery);