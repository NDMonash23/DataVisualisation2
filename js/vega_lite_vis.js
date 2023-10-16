var spec1 = "js/cities_traffic_proportional_symbol_map.vg.json";
  var spec2 = "js/airline_traffic_scatterplot.vg.json";
  var spec3 = "js/australian_city_flight_traffic_barchart.vg.json";
  var spec4 = "js/country_flight_traffic_treemap.vg.json";
  var spec5 = "js/popular_routes_sankey_diagram.vg.json";
  var spec6 = "js/city_aircraft_type_heatmap.vg.json";

  vegaEmbed('#cities_traffic_proportional_symbol_map', spec1, {"actions": false}).then(function(result) {
    // Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view
  }).catch(console.error);

  vegaEmbed('#airline_traffic_scatterplot', spec2, {"actions": false}).then(function(result) {
    // Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view
  }).catch(console.error);

  vegaEmbed('#australian_city_flights_barchart', spec3, {"actions": false}).then(function(result) {
    // Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view
  }).catch(console.error);

  vegaEmbed('#country_flights_treemap', spec4, {"actions": false}).then(function(result) {
    // Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view
  }).catch(console.error);

  vegaEmbed('#popular_routes_sankey_diagram', spec5, {"actions": false}).then(function(result) {
    // Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view
  }).catch(console.error);

  vegaEmbed('#city_aircraft_type_heatmap', spec6, {"actions": false}).then(function(result) {
    // Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view
  }).catch(console.error);