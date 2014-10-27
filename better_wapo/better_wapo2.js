$(document).ready(function(){

    var w = 1200;
    var h = 20000;
    var buffer = 10

    var text_w = 100;
    var graph_w = 300;

    var bar_h = 10;
    var label_height = 15;
    var city_height = 60;

    var white_g_x = graph_w+buffer*4
    var black_g_x = white_g_x+graph_w+text_w/2+buffer*2;
    var data_y_offset = 25


    var headers_svg = d3.select('#viz_main').append('svg')
	.attr('id','headers_svg')
	.attr('height',60)
	.attr('width',w)
	.style('margin-left',50)

    text_style = function(thing,pt){
	thing
	    .style('fill','darkgray')
	    .style('font-family','sans-serif')
	    .style('font-size',pt)
	return thing;
    }

    text_style(headers_svg.append('text'),24)
	.attr('x',0)
	.attr('y',30)
	.text('Place')

    text_style(headers_svg.append('text'),14)
	.attr('x',text_w+white_g_x)
	.attr('y',35)
	.text('% force - % population') 
    text_style(headers_svg.append('text'),14)
	.attr('x',text_w+white_g_x)
	.attr('y',50)
	.text('((% force - % population) / % population)')

    var svg = d3.select('#viz_main').append('svg')
	.attr('id','main_svg')
	.attr('height',h)
	.attr('width',w)
	.style('margin-left',50)

    var x = d3.scale.linear()
	.range([1,graph_w])
	.domain([0,100])

    var calc_balance = function(d){
	other_pct = 100 - (d.whitepct + d.blackpct)
	other_popopct = 100 - (d.police_whitepct + d.police_blackpct)
	other_diff = other_pct - other_popopct
	balance = Math.abs(d.white_diff) + Math.abs(d.black_diff) +  Math.abs(other_diff)
	return balance;}

    staffing_data.forEach(function(d){
	d.white_diff = (d.police_whitepct - d.whitepct)
	d.white_diffpct = (100*(d.police_whitepct - d.whitepct)/d.whitepct)
	d.black_diff = (d.police_blackpct - d.blackpct)
	d.black_diffpct = (100*(d.police_blackpct - d.blackpct)/d.blackpct)
	d.balance = calc_balance(d)
    })


    sd = staffing_data.filter(function(d){
     	    return d.blackpct>5 
	    && d.totpop>700000
	    && d.city != 'Fountainebleau'})
    sd.sort(function(a,b){
	if (a.black_diffpct < b.black_diffpct ) {
	    return -1 }
	    else { return 1 }
    })

    city_g = svg.selectAll('g')
	.data(sd)
	.enter().append('g')
	.attr('class','city_g')
	.attr('transform',function(d,i){return 'translate(0,'+i*city_height+')'})

    text_style(city_g.append('text'))
	.attr('x',0)
	.attr('y',label_height)
	.text(function(d){
	    return d.place.replace(' city','');
	})
    text_style(city_g.append('text'),12)
	.attr('x',white_g_x-10)
	.attr('y',label_height)
	.text(function(d){
	    return 'pop. '+d.totpop;})
    text_style(city_g.append('text'),12)
	.attr('x',5)
	.attr('y',data_y_offset + 8)
	.text('population')
    text_style(city_g.append('text'),12)
	.attr('x',5)
	.attr('y',data_y_offset + 26)
	.text('police force')


    city_data_g = city_g.append('g')
	.attr('class','city_data_g')
	.attr('transform','translate('+text_w+','+data_y_offset+')')
    
    expected_g = city_data_g.append('g')
	.attr('class','expected')
    
    full_pop = function(r){return r
	.attr('x',0)
	.attr('y',0)
	.attr('height',bar_h)
	.attr('width',x(100))
	.style('fill','lightgray')}

    ew = function(r){return r
	.attr('x',0)
	.attr('y',0)
	.attr('height',bar_h)
	.attr('width',function(d){return x(d.whitepct)})
	.style('fill','#95D3D0')}

    eb = function(r){return r
	.attr('x',function(d){return x(d.whitepct)})
	.attr('y',0)
	.attr('height',bar_h)
	.attr('width',function(d){return x(d.blackpct)})
	.style('fill','#57BFE2')}

    full_pop(expected_g.append('rect'))
    ew(expected_g.append('rect'))
    eb(expected_g.append('rect'))


    actual_g = city_data_g.append('g')
	.attr('class','actual')
    	.attr('transform','translate(0,'+(bar_h+6)+')')

    aw = function(r){return r
	.attr('x',0)
	.attr('y',0)
	.attr('height',bar_h)
	.attr('width',function(d){return x(d.police_whitepct)})
	.style('fill','#78BBB8')}


    ab = function(r){return r
    	.attr('x',function(d){return x(d.police_whitepct)})
    	.attr('y',0)
    	.attr('width',function(d){return x(d.police_blackpct)})
    	.attr('height',bar_h)
    	.style('fill','#459BB8')}

    full_pop(actual_g.append('rect'))
    ab(actual_g.append('rect'))
    aw(actual_g.append('rect'))

    white_g = city_data_g.append('g')
    	.attr('class','white_g')
    	.attr('transform','translate('+white_g_x+',0)')
    text_style(white_g.append('text'),12)
	.attr('x',0)
	.attr('y',10)
	.text(function(d){
	    str = ''
	    if (d.white_diff > 0) { str += '+' }
	    return str += d.white_diff.toFixed(1)
	})
    text_style(white_g.append('text'),12)
	.attr('x',0)
	.attr('y',24)
	.text(function(d){
	    return '('+d.white_diffpct.toFixed(1) + '%)'
	})
    white_bars_g = white_g.append('g')
	.attr('class','white_bars_g')
	.attr('transform','translate('+(text_w/1.8)+',0)')
    ew(white_bars_g.append('rect'))
    aw(white_bars_g.append('rect'))
	.attr('y',bar_h + 6)
    
    black_g = city_data_g.append('g')
    .attr('class','black_g')
    .attr('transform','translate('+black_g_x+',0)')
    text_style(black_g.append('text'),12)
	.attr('x',0)
	.attr('y',10)
	.text(function(d){
	    str = ''
	    if (d.black_diff > 0) { str += '+' }
	    return str += d.black_diff.toFixed(1)
	})
    text_style(black_g.append('text'),12)
	.attr('x',0)
	.attr('y',24)
	.text(function(d){
	    return '('+d.black_diffpct.toFixed(1) + '%)'
	})
    black_bars_g = black_g.append('g')
	.attr('class','black_bars_g')
	.attr('transform','translate('+text_w/1.8+',0)')
    eb(black_bars_g.append('rect'))
	.attr('x',0)
    ab(black_bars_g.append('rect'))
	.attr('x',0)
	.attr('y',bar_h + 6)




})
