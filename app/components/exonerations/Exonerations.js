import React from 'react';
import d3 from 'd3';
import data from '../../data/exonerees.json!json';

class Exonerations extends React.Component {
    render() {
        return (
            <div className="exonerations__container">
                <h2 className="exonerations__subtitle">Mistaken Witness Identification: Race Makes a Difference</h2>
                <p>Contributing Factors for Exoneration in the United States Since 1989</p>
                <figure className="exonerations" ref="exonerations"></figure>
                <p className="footnote">Full descriptions and data publicly available from <a href="www.law.umich.edu/special/exoneration/Pages/detaillist.aspx">The National Registry of Exonerations</a></p>
            </div>
        )
    }
    componentDidMount() {
        let margin = {top: 60, right: 40, bottom: 20, left: 210};

        let yOffset = 23;

        let barHeight = 35;
        
        let dict = {
            'F/MFE': 'False or Misleading Forensic Evidence',
            'MWID': 'Mistaken Witness Identification',
            'FC': 'False Confession',
            'P/FA': 'Perjury or False Accusation',
            'OM': 'Official Misconduct',
            'ILD': 'Inadequate Legal Defense'
        }
        
        let arr = Object.keys(dict).map(function(v) { return v; });

        let colors = ['#635274', '#7BB0A8', '#d3d3d3'];

        let width = d3.select('figure').node().clientWidth - margin.left - margin.right;
        let height = d3.select('figure').node().clientHeight - margin.top - margin.bottom;

        let svg = d3.select(this.refs.exonerations).append("svg")
            .attr("width", width + margin.left + margin.right)
            .attr("height", height + margin.top + margin.bottom);

        let g = svg.append("g")
            .attr("transform", "translate(" + margin.left + "," + margin.top + ")");
        
        var normalized = normalize(data);
        render(normalized);

        function normalize(data) {
        
            let nest = d3.nest()
                .key(function(d) { return d.Race; });

            let nested = nest.entries(data);

            let totals = nested
                .slice(0,3)
                .map(function(v) {
                return v.values;
                })
                .reduce(function(acc, cur) {
                cur.forEach(function(ex) {

                    if (!acc.hasOwnProperty(ex['Race'])) {
                    let obj = acc[ex['Race']] = { 'total': 0 };
                    arr.forEach(function(x) {
                        obj[x] = 0;
                    });
                    }

                    Object.keys(ex)
                    .filter(function(y) {
                        return arr.indexOf(y) > -1;
                    })
                    .forEach(function(z) {
                        if (ex[z].length > 0) {
                        acc[ex['Race']][z] += 1;
                        }
                    });

                    acc[ex['Race']]['total'] += 1;

                });
                return acc;
                }, {});

            let percentages = (function(t) {
                let p = {};
                Object.keys(t).forEach(function(v) {
                p[v] = {};
                Object.keys(t[v]).forEach(function(w) {
                    if (w !== 'total') {
                    let percent = t[v][w] / t[v]['total'];
                    let percentRounded = Math.round(percent * 100);
                    p[v][w] = percentRounded;
                    } else {
                    p[v][w] = t[v][w];
                    }
                })
                });
                return p;
            })(totals);

            //make array of objects that are 6 categories
            let formatted = (function(p) {
                let f = [];
                arr.forEach(function(v) {
                let obj = { 'category' : v };
                Object.keys(p).forEach(function(w) {
                    //console.info(w, v, p[w][v]);
                    obj[w] = p[w][v];
                })
                f.push(obj);
                })
                return f;
            })(percentages);

            //get total/category and adjusted percentage;
            let adjusted = (function(f) {
                let maxes = f.map(function(v) {
                let max = 0;
                let total = 0;
                Object.keys(v).forEach(function(w) {
                    if (w !== 'category') {
                    total += v[w];
                    }
                })
                v['total'] = total;
                return v;
                });
                let increase = maxes.map(function(x) {
                let obj = {};
                let increaseAmt = (100 - x.total) / 3;
                Object.keys(x).forEach(function(y) {
                    if (y !== 'category' && y!== 'total') {
                    x[y] += increaseAmt;
                    }
                    obj[y] = x[y];
                })
                return obj;
                })
                return increase;
            })(formatted);

            let sorted = adjusted.sort(function(a, b) {
                return a['Black'] + a['Hispanic'] > b['Black'] + b['Hispanic'];
            });

            return sorted;

        }

        function render(data) {
            let x = d3.scale.linear().domain([0, 100]).range([0, width]);
            let y = d3.scale.ordinal()
                .domain(data.map(function(d) { return d.category; })) 
                .rangeBands([height, 0], 0.3, 0);

            let yLabel = d3.scale.ordinal()
                .domain(data.map(function(d) { return dict[d.category]; }))
                .rangeBands([height, 0], 0.3, 0);

            let xAxis = d3.svg.axis().scale(x).orient('top')
                .tickFormat(function(d) { return d + '%'; });
            let yAxis = d3.svg.axis().scale(yLabel).orient('left');

            g.append('g')
                .classed('x axis', true)
                .call(xAxis)
                .style({
                    'font-size': 12
                })

            g.selectAll('.x.axis')
                .select('text')
                .style('text-anchor', 'start')


            g.append('g')
                .classed('y axis', true)
                .call(yAxis)
                .style({
                    'font-size': 12
                })

            g.select('.y.axis')
                .selectAll('.tick')
                .select('text')
                .each(function(d, i) {
                if (i === data.length - 1) {
                    d3.select(this)
                        .style('fill', '#512B52')
                        .style('font-weight', 'bold')
                        .attr('font-style', 'italic')
                }
                });

            g.append('text')
                .classed('x label', true)
                .attr({
                x: 0,
                y: -margin.top/2
                })
                .text('Percent of Total');

            let section = g.selectAll('.section')
                .data(data)
            .enter().append('g')
                .classed('section', true)
                .attr('transform', function(d) {
                return 'translate(0,' + y(d.category) + ')';
                });

            let black = section.append('rect')
                .classed('bar Black', true)
                .attr('fill', colors[0])
                .attr('width', function(d) { return x(d['Black']); })
                .attr('height', barHeight);

            let hispanic = section.append('rect')
                .classed('bar Hispanic', true)
                .attr('fill', colors[1])
                .attr('x', function(d) { return x(d['Black']); })
                .attr('width', function(d) { return x(d['Hispanic']); })
                .attr('height', barHeight);

            let white = section.append('rect')
                .classed('bar Caucasian', true)
                .attr('fill', colors[2])
                .attr('x', function(d) { return x(d['Black']) + x(d['Hispanic']); })
                .attr('width', function(d) { return x(d['Caucasian']); })
                .attr('height', barHeight);

            let tooltip = g.append('text')
                .text('0%')
                .attr('opacity', 0)
                .attr('fill', 'white');

            let labels = ['Black', 'Hispanic', 'White'];

            g.selectAll('.key')
                .data(labels)
            .enter().append('text')
                .classed('key', true)
                .text(function(d) { return d; })
                .attr('fill', 'white')
                .attr('text-anchor', 'middle')
                .attr('x', function(d, i) {
                let offset;
                let j = data.length - 1;
                if (i === 0) {
                    offset = x(data[j]['Black']) / 2;
                } else if (i === 1) {
                    offset = x(data[j]['Black']) + (x(data[j]['Hispanic']) / 2);
                } else {
                    offset = x(data[j]['Black']) + x(data[j]['Hispanic']) + (x(data[j]['Caucasian']) / 2);
                }
                return offset;
                })
                .attr('y', yOffset);

            d3.selectAll('.bar')
                .on('mouseover', function(d) {

                    let xLoc = +d3.select(this).attr('x') || 0;

                    let parent = d3.select(this).node().parentNode;
                    let arr = d3.select(parent).attr('transform').split(',');
                    let yLoc = +arr[1].substring(0, arr[1].length - 1);

                    let cl = d3.select(this).attr('class').split(' ')[1];

                    tooltip
                        .text(Math.round(d[cl]) + '%')
                        .attr({
                            x: xLoc + 8,
                            y: yLoc + yOffset
                        })
                        .transition()
                        .attr('opacity', 1);

                })
                .on('mouseleave', function() {
                    tooltip.attr('opacity', 0);
                });

        }
    }
}

export default Exonerations;