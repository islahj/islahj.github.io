/**
 * ---------------------------------------
 * This demo was created using amCharts 4.
 * 
 * For more information visit:
 * https://www.amcharts.com/
 * 
 * Documentation is available at:
 * https://www.amcharts.com/docs/v4/
 * ---------------------------------------
 */

// Themes begin
am4core.useTheme(am4themes_dark);
am4core.useTheme(am4themes_animated);
// Themes end



var chart = am4core.create("chartdiv", am4charts.XYChart);

chart.data = [
              {
                name: 'Isla Yeon',
                birth: 1989,
                death: 2020
              },
              {
                name: 'MyeongSuk Song',
                birth: 1961,
                death: 2020
              },
                  {
                name: 'KyuSun Yeon',
                birth: 1961,
                death: 2020
              },
               {
                name: 'GumSun Nam',
                birth: 1934,
                death: 2012
              },
               {
                name: 'SunRae Kim',
                birth: 1933,
                death: 2020
              },
               {
                name: 'WooYoung Song',
                birth: 1930,
                death: 2017
              },
              {
                name: 'JangHee Yeon',
                birth: 1929,
                death: 2013
              },
               {
                name: 'DukSun Sung',
                birth: 1908,
                death: 1986
              },
               {
                name: 'TaeWoo Shin',
                birth: 1906,
                death: 1981
              },
               {
                name: 'CheonWoo Nam',
                birth: 1903,
                death: 1987
              },
               {
                name: 'AunNyeon Kang',
                birth: 1899,
                death: 1943
              },
               {
                name: 'BokSun Yang',
                birth: 1898,
                death: 1970
              },
               {
                name: 'SukBong Song',
                birth: 1891,
                death: 1947
              },
               {
                name: 'ByungDal Yeon',
                birth: 1886,
                death: 1941
              },
               {
                name: 'BokHwan Kim',
                birth: 1885,
                death: 1966
              },
              ];

var categoryAxis = chart.yAxes.push(new am4charts.CategoryAxis());
categoryAxis.renderer.grid.template.location = 0;
categoryAxis.renderer.ticks.template.disabled = true;
categoryAxis.renderer.axisFills.template.disabled = true;
categoryAxis.dataFields.category = "name";
categoryAxis.renderer.minGridDistance = 15;
categoryAxis.renderer.inversed = true;
categoryAxis.renderer.inside = true;
categoryAxis.renderer.grid.template.location = 0.5;
categoryAxis.renderer.grid.template.strokeDasharray = "1,3";

var valueAxis = chart.xAxes.push(new am4charts.ValueAxis());
valueAxis.tooltip.disabled = true;
valueAxis.renderer.ticks.template.disabled = true;
valueAxis.renderer.axisFills.template.disabled = true;
valueAxis.renderer.inversed = true;

var series = chart.series.push(new am4charts.ColumnSeries());
series.dataFields.categoryY = "name";
series.dataFields.openValueX = "birth";
series.dataFields.valueX = "death";
series.tooltipText = "Birth: {openValueX.value}, Death: {valueX.value}";
series.sequencedInterpolation = true;
series.fillOpacity = 0;
series.strokeOpacity = 1;
series.columns.template.height = 0.01;
series.tooltip.pointerOrientation = "vertical";

var openBullet = series.bullets.create(am4charts.CircleBullet);
openBullet.locationX = 1;

var closeBullet = series.bullets.create(am4charts.CircleBullet);

closeBullet.fill = chart.colors.getIndex(4);
closeBullet.stroke = closeBullet.fill;

chart.cursor = new am4charts.XYCursor();
chart.cursor.behavior = "zoomY";

chart.scrollbarX = new am4core.Scrollbar();
chart.scrollbarY = new am4core.Scrollbar();