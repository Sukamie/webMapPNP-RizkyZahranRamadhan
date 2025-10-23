var wms_layers = [];


        var lyr_googlesatelite_0 = new ol.layer.Tile({
            'title': 'google satelite',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'http://mt0.google.com/vt/lyrs=s&hl=en&x={x}&y={y}&z={z}'
            })
        });
var format_gedung_1 = new ol.format.GeoJSON();
var features_gedung_1 = format_gedung_1.readFeatures(json_gedung_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_gedung_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_gedung_1.addFeatures(features_gedung_1);
var lyr_gedung_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_gedung_1, 
                style: style_gedung_1,
                popuplayertitle: 'gedung',
                interactive: true,
                title: '<img src="styles/legend/gedung_1.png" /> gedung'
            });
var format_jalan_2 = new ol.format.GeoJSON();
var features_jalan_2 = format_jalan_2.readFeatures(json_jalan_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_jalan_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_jalan_2.addFeatures(features_jalan_2);
var lyr_jalan_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_jalan_2, 
                style: style_jalan_2,
                popuplayertitle: 'jalan',
                interactive: true,
                title: '<img src="styles/legend/jalan_2.png" /> jalan'
            });
var format_jalankoridor_3 = new ol.format.GeoJSON();
var features_jalankoridor_3 = format_jalankoridor_3.readFeatures(json_jalankoridor_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_jalankoridor_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_jalankoridor_3.addFeatures(features_jalankoridor_3);
var lyr_jalankoridor_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_jalankoridor_3, 
                style: style_jalankoridor_3,
                popuplayertitle: 'jalan koridor',
                interactive: true,
                title: '<img src="styles/legend/jalankoridor_3.png" /> jalan koridor'
            });
var format_tambahan_4 = new ol.format.GeoJSON();
var features_tambahan_4 = format_tambahan_4.readFeatures(json_tambahan_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_tambahan_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_tambahan_4.addFeatures(features_tambahan_4);
var lyr_tambahan_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_tambahan_4, 
                style: style_tambahan_4,
                popuplayertitle: 'tambahan',
                interactive: true,
                title: '<img src="styles/legend/tambahan_4.png" /> tambahan'
            });
var format_titik_tambahan_5 = new ol.format.GeoJSON();
var features_titik_tambahan_5 = format_titik_tambahan_5.readFeatures(json_titik_tambahan_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_titik_tambahan_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_titik_tambahan_5.addFeatures(features_titik_tambahan_5);
var lyr_titik_tambahan_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_titik_tambahan_5, 
                style: style_titik_tambahan_5,
                popuplayertitle: 'titik_tambahan',
                interactive: true,
                title: '<img src="styles/legend/titik_tambahan_5.png" /> titik_tambahan'
            });
var format_titik_gedung_6 = new ol.format.GeoJSON();
var features_titik_gedung_6 = format_titik_gedung_6.readFeatures(json_titik_gedung_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_titik_gedung_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_titik_gedung_6.addFeatures(features_titik_gedung_6);
var lyr_titik_gedung_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_titik_gedung_6, 
                style: style_titik_gedung_6,
                popuplayertitle: 'titik_gedung',
                interactive: true,
                title: '<img src="styles/legend/titik_gedung_6.png" /> titik_gedung'
            });

lyr_googlesatelite_0.setVisible(true);lyr_gedung_1.setVisible(true);lyr_jalan_2.setVisible(true);lyr_jalankoridor_3.setVisible(true);lyr_tambahan_4.setVisible(true);lyr_titik_tambahan_5.setVisible(true);lyr_titik_gedung_6.setVisible(true);
var layersList = [lyr_googlesatelite_0,lyr_gedung_1,lyr_jalan_2,lyr_jalankoridor_3,lyr_tambahan_4,lyr_titik_tambahan_5,lyr_titik_gedung_6];
lyr_gedung_1.set('fieldAliases', {'id': 'id', 'gedung': 'gedung', });
lyr_jalan_2.set('fieldAliases', {'id': 'id', 'jalan': 'jalan', });
lyr_jalankoridor_3.set('fieldAliases', {'id': 'id', });
lyr_tambahan_4.set('fieldAliases', {'id': 'id', });
lyr_titik_tambahan_5.set('fieldAliases', {'id': 'id', 'Name': 'Name', });
lyr_titik_gedung_6.set('fieldAliases', {'id': 'id', 'name': 'name', });
lyr_gedung_1.set('fieldImages', {'id': 'TextEdit', 'gedung': 'TextEdit', });
lyr_jalan_2.set('fieldImages', {'id': 'TextEdit', 'jalan': 'TextEdit', });
lyr_jalankoridor_3.set('fieldImages', {'id': 'TextEdit', });
lyr_tambahan_4.set('fieldImages', {'id': 'TextEdit', });
lyr_titik_tambahan_5.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', });
lyr_titik_gedung_6.set('fieldImages', {'id': 'TextEdit', 'name': 'TextEdit', });
lyr_gedung_1.set('fieldLabels', {'id': 'no label', 'gedung': 'no label', });
lyr_jalan_2.set('fieldLabels', {'id': 'no label', 'jalan': 'no label', });
lyr_jalankoridor_3.set('fieldLabels', {'id': 'no label', });
lyr_tambahan_4.set('fieldLabels', {'id': 'no label', });
lyr_titik_tambahan_5.set('fieldLabels', {'id': 'no label', 'Name': 'inline label - always visible', });
lyr_titik_gedung_6.set('fieldLabels', {'id': 'no label', 'name': 'inline label - always visible', });
lyr_titik_gedung_6.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});