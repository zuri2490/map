var wms_layers = [];

var format_Fondo_marino_0 = new ol.format.GeoJSON();
var features_Fondo_marino_0 = format_Fondo_marino_0.readFeatures(json_Fondo_marino_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Fondo_marino_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Fondo_marino_0.addFeatures(features_Fondo_marino_0);
var lyr_Fondo_marino_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Fondo_marino_0, 
                style: style_Fondo_marino_0,
                interactive: true,
    title: 'Fondo_marino<br />\
    <img src="styles/legend/Fondo_marino_0_0.png" /> Plataforma Continental<br />\
    <img src="styles/legend/Fondo_marino_0_1.png" /> Hadal<br />\
    <img src="styles/legend/Fondo_marino_0_2.png" /> Batial Superior<br />\
    <img src="styles/legend/Fondo_marino_0_3.png" /> Batial Inferior<br />\
    <img src="styles/legend/Fondo_marino_0_4.png" /> Abisal Superior<br />\
    <img src="styles/legend/Fondo_marino_0_5.png" /> Abisal Inferior<br />\
    <img src="styles/legend/Fondo_marino_0_6.png" /> <br />'
        });
var format_Entidad_federativa_1 = new ol.format.GeoJSON();
var features_Entidad_federativa_1 = format_Entidad_federativa_1.readFeatures(json_Entidad_federativa_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Entidad_federativa_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Entidad_federativa_1.addFeatures(features_Entidad_federativa_1);
var lyr_Entidad_federativa_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Entidad_federativa_1, 
                style: style_Entidad_federativa_1,
                interactive: true,
                title: '<img src="styles/legend/Entidad_federativa_1.png" /> Entidad_federativa'
            });
var format_Region_Hidrolgica_2 = new ol.format.GeoJSON();
var features_Region_Hidrolgica_2 = format_Region_Hidrolgica_2.readFeatures(json_Region_Hidrolgica_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Region_Hidrolgica_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Region_Hidrolgica_2.addFeatures(features_Region_Hidrolgica_2);
var lyr_Region_Hidrolgica_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Region_Hidrolgica_2, 
                style: style_Region_Hidrolgica_2,
                interactive: true,
                title: '<img src="styles/legend/Region_Hidrolgica_2.png" /> Region_Hidrológica'
            });

lyr_Fondo_marino_0.setVisible(true);lyr_Entidad_federativa_1.setVisible(true);lyr_Region_Hidrolgica_2.setVisible(true);
var layersList = [lyr_Fondo_marino_0,lyr_Entidad_federativa_1,lyr_Region_Hidrolgica_2];
lyr_Fondo_marino_0.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'Nombre': 'Nombre', 'Hectares': 'Hectares', 'Shape_Length': 'Shape_Length', 'Shape_Area': 'Shape_Area', });
lyr_Entidad_federativa_1.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'CVE_ENT': 'CVE_ENT', 'NOM_ENT': 'NOM_ENT', 'CVE_CAP': 'CVE_CAP', 'NOM_CAP': 'NOM_CAP', 'COV_': 'COV_', 'COV_ID': 'COV_ID', 'AREA': 'AREA', 'PERIMETER': 'PERIMETER', 'Shape_Length': 'Shape_Length', 'Shape_Area': 'Shape_Area', });
lyr_Region_Hidrolgica_2.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'AREA': 'AREA', 'PERIMETER': 'PERIMETER', 'COV_': 'COV_', 'COV_ID': 'COV_ID', 'CLAVE': 'CLAVE', 'ORG_CUENCA': 'ORG_CUENCA', 'CLV_OC': 'CLV_OC', 'Shape_Length': 'Shape_Length', 'Shape_Area': 'Shape_Area', });
lyr_Fondo_marino_0.set('fieldImages', {'OBJECTID': 'TextEdit', 'Nombre': 'TextEdit', 'Hectares': 'TextEdit', 'Shape_Length': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_Entidad_federativa_1.set('fieldImages', {'OBJECTID': 'TextEdit', 'CVE_ENT': 'TextEdit', 'NOM_ENT': 'TextEdit', 'CVE_CAP': 'Range', 'NOM_CAP': 'TextEdit', 'COV_': 'Range', 'COV_ID': 'Range', 'AREA': 'TextEdit', 'PERIMETER': 'TextEdit', 'Shape_Length': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_Region_Hidrolgica_2.set('fieldImages', {'OBJECTID': 'TextEdit', 'AREA': 'TextEdit', 'PERIMETER': 'TextEdit', 'COV_': 'TextEdit', 'COV_ID': 'TextEdit', 'CLAVE': 'TextEdit', 'ORG_CUENCA': 'TextEdit', 'CLV_OC': 'TextEdit', 'Shape_Length': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_Fondo_marino_0.set('fieldLabels', {'OBJECTID': 'no label', 'Nombre': 'no label', 'Hectares': 'no label', 'Shape_Length': 'no label', 'Shape_Area': 'no label', });
lyr_Entidad_federativa_1.set('fieldLabels', {'OBJECTID': 'no label', 'CVE_ENT': 'no label', 'NOM_ENT': 'no label', 'CVE_CAP': 'no label', 'NOM_CAP': 'no label', 'COV_': 'no label', 'COV_ID': 'no label', 'AREA': 'no label', 'PERIMETER': 'no label', 'Shape_Length': 'no label', 'Shape_Area': 'no label', });
lyr_Region_Hidrolgica_2.set('fieldLabels', {'OBJECTID': 'no label', 'AREA': 'no label', 'PERIMETER': 'no label', 'COV_': 'no label', 'COV_ID': 'no label', 'CLAVE': 'no label', 'ORG_CUENCA': 'no label', 'CLV_OC': 'no label', 'Shape_Length': 'no label', 'Shape_Area': 'no label', });
lyr_Region_Hidrolgica_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});