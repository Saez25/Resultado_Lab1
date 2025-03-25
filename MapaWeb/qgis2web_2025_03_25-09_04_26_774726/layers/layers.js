ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:3857").setExtent([-8139469.412555, -4405601.438198, -8134478.643438, -4402859.291261]);
var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &nbsp &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_Casakmz_1 = new ol.format.GeoJSON();
var features_Casakmz_1 = format_Casakmz_1.readFeatures(json_Casakmz_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Casakmz_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Casakmz_1.addFeatures(features_Casakmz_1);
var lyr_Casakmz_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Casakmz_1, 
                style: style_Casakmz_1,
                popuplayertitle: 'Casa.kmz',
                interactive: true,
                title: 'Casa.kmz'
            });
var format_CasaSaez_2 = new ol.format.GeoJSON();
var features_CasaSaez_2 = format_CasaSaez_2.readFeatures(json_CasaSaez_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CasaSaez_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CasaSaez_2.addFeatures(features_CasaSaez_2);
cluster_CasaSaez_2 = new ol.source.Cluster({
  distance: 30,
  source: jsonSource_CasaSaez_2
});
var lyr_CasaSaez_2 = new ol.layer.Vector({
                declutter: false,
                source:cluster_CasaSaez_2, 
                style: style_CasaSaez_2,
                popuplayertitle: 'Casa Saez',
                interactive: true,
                title: '<img src="styles/legend/CasaSaez_2.png" /> Casa Saez'
            });

lyr_OSMStandard_0.setVisible(true);lyr_Casakmz_1.setVisible(true);lyr_CasaSaez_2.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_Casakmz_1,lyr_CasaSaez_2];
lyr_Casakmz_1.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_CasaSaez_2.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'T_pregunt': 'T_pregunt', 'Porc_Co': 'Porc_Co', 'Porc_Inc': 'Porc_Inc', 'Video': 'Video', 'N_Preg_Cor': 'N_Preg_Cor', 'N_Preg_Inc': 'N_Preg_Inc', 'Porc_Total': 'Porc_Total', });
lyr_Casakmz_1.set('fieldImages', {'id': '', 'Name': '', 'description': '', 'timestamp': '', 'begin': '', 'end': '', 'altitudeMode': '', 'tessellate': '', 'extrude': '', 'visibility': '', 'drawOrder': '', 'icon': '', });
lyr_CasaSaez_2.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'T_pregunt': 'TextEdit', 'Porc_Co': 'TextEdit', 'Porc_Inc': 'TextEdit', 'Video': 'Range', 'N_Preg_Cor': 'TextEdit', 'N_Preg_Inc': 'TextEdit', 'Porc_Total': 'TextEdit', });
lyr_Casakmz_1.set('fieldLabels', {'id': 'no label', 'Name': 'no label', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_CasaSaez_2.set('fieldLabels', {'id': 'no label', 'Name': 'inline label - always visible', 'T_pregunt': 'inline label - always visible', 'Porc_Co': 'inline label - visible with data', 'Porc_Inc': 'inline label - always visible', 'Video': 'inline label - always visible', 'N_Preg_Cor': 'inline label - always visible', 'N_Preg_Inc': 'inline label - always visible', 'Porc_Total': 'inline label - always visible', });
lyr_CasaSaez_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});