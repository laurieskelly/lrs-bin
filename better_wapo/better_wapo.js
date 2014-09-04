$(document).ready(function(){
    console.log('hi')

    var h = 400;
    var w = 1000;
    var h2 = 100;

    fs = staffing_data.filter(function(g){
	return g.totpop > 300000;
    })
	.sort(function(a,b){
	    art = (a.police_whiteepct/a.whitepct)/(a.police_blackpct/a.blackpct)
	    brt =  (b.police_whiteepct/b.whitepct)/(b.police_blackpct/b.blackpct)
	    if (art<brt) { 
		return 1 } 
	    else { 
		return -1 
	    }
	})

    var y = d3.scale.linear()
	.range([h-2,0])
	.domain([100,0])

    var y2 = d3.scale.linear()
	.range([h2,2])
	.domain([100,0])

    console.log(y2(0),y2(25),y2(50),y2(75),y2(100))

    var svg = d3.select('#viz_main').append('svg')
	.attr('id','main_svg')
	.attr('height',h+h2)
	.attr('width',w)

    city_g = svg.selectAll('g')
	.data(fs)
	.enter().append('g')
	.attr('class','city_g')
	.attr('transform',function(d,i){return 'translate('+i*12+',0)'})

    // tot_pops = city_g.append('rect')
    // 	.attr('x',0)
    // 	.attr('y',function(d){return h-y(d.totpop)})
    // 	.attr('height',function(d){return y(d.totpop)})
    // 	.attr('width',5)
    // 	.style('fill','magenta')

    pop_rects = city_g.append('rect')
	.attr('x',0)
	.attr('y',y(0))
	.attr('width',10)
	.attr('height',h)
	.attr('title',function(d){return d.place})
	.style('fill','lightgray')
	.attr('class','pop-rects')
    
    white_pops = city_g.append('rect')
    	.attr('x',0)
    	.attr('y',function(d){return h-y(d.whitepct)})
    	.attr('height',function(d){return y(d.whitepct)})
    	.attr('width',10)
    	.style('fill','green')
	.attr('class','white-pop')

    black_pops = city_g.append('rect')
	.attr('x',0)
	.attr('y',function(d){return h-(y(d.whitepct)+y(d.blackpct))})
	.attr('height',function(d){return y(d.blackpct)})
	.attr('width',10)
	.style('fill','blue')
	.attr('class','black-pop')

    popo_rects = city_g.append('rect')
	.attr('x',0)
	.attr('y',h+y2(0))
	.attr('width',10)
	.attr('height',y2(100))
	.style('fill','gray')
	.attr('class','popo-rects')

    white_popos = city_g.append('rect')
	.attr('x',0)
	.attr('y',h+y2(0))
	.attr('width',10)
	.attr('height',function(d){return y2(d.police_whitepct)})
	.attr('class','white-popos')
	.style('fill','green')

    black_popos = city_g.append('rect')
	.attr('x',0)
	.attr('y',function(d){return h+y2(d.police_whitepct)})
	.attr('width',10)
	.attr('height',function(d){return y2(d.police_blackpct)})
	.attr('class','black-popos')
	.style('fill','blue')

})
