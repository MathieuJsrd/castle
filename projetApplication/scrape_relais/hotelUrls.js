

var hotelUrls = new Array();
hotelUrls= [
    'https://www.relaischateaux.com/fr/france/bussiere-cote-d-or-la-bussiere-sur-ouche',
 'https://www.relaischateaux.com/fr/france/annedebretagne-loire-atlantique-la-plaine-sur-mer',
 'https://www.relaischateaux.com/fr/france/assiette-champenoise-champagne-ardenne-tinqueux',
 'https://www.relaischateaux.com/fr/france/crocodile-bas-rhin',
 'https://www.relaischateaux.com/fr/france/coeurduvillage-rhone-alpes-la-clusaz',
 'https://www.relaischateaux.com/fr/france/aubergedelile-rhone-lyon',
 'https://www.relaischateaux.com/fr/france/auberge-des-glazicks-plomodiern',
 'https://www.relaischateaux.com/fr/france/templiers-loiret-boismorand',
 'https://www.relaischateaux.com/fr/france/jeudepaume-oise-chantilly',
 'https://www.relaischateaux.com/fr/france/baumaniere-hotel-spa-les-baux-de-provence',
 'https://www.relaischateaux.com/fr/france/brittany-finistere-roscoff',
 'https://www.relaischateaux.com/fr/france/antibes-alpes-maritimes-cap-d-antibes',
 'https://www.relaischateaux.com/fr/france/castelclara-morbihan-bangor',
 'https://www.relaischateaux.com/fr/france/cazaudehore-yvelines-saint-germain-en-laye',
 'https://www.relaischateaux.com/fr/france/cordeillan-gironde-pauillac',
 'https://www.relaischateaux.com/fr/france/chateau-lafaurie-peyraguey-lalique-bommes',
 'https://www.relaischateaux.com/fr/france/bagnols-rhone-alpes',
 'https://www.relaischateaux.com/fr/france/berne-var-lorgues',
 'https://www.relaischateaux.com/fr/france/codignat-puy-de-dome-bort-l-etang',
 'https://www.relaischateaux.com/fr/france/courcelles-aisne-courcelles-sur-vesle',
 'https://www.relaischateaux.com/fr/france/curzay-vienne-curzay-sur-vonne',
 'https://www.relaischateaux.com/fr/france/chateau-de-drudas',
 'https://www.relaischateaux.com/fr/france/fonscolombe-bouches-du-rhone',
 'https://www.relaischateaux.com/fr/france/germigney-jura-port-lesney',
 'https://www.relaischateaux.com/fr/france/chevredor-alpes-maritimes-eze-village',
 'https://www.relaischateaux.com/fr/france/locguenole-morbihan-kervignac',
 'https://www.relaischateaux.com/fr/france/mercues-lot-mercues',
 'https://www.relaischateaux.com/fr/france/mirambeau-charente-maritime-mirambeau',
 'https://www.relaischateaux.com/fr/france/montreuil-pas-de-calais-montreuil',
 'https://www.relaischateaux.com/fr/france/noirieux-maine-et-loire-briollay',
 'https://www.relaischateaux.com/fr/france/noizay-indre-et-loire-noizay',
 'https://www.relaischateaux.com/fr/france/riell-pyrenees-orientales-prades',
 'https://www.relaischateaux.com/fr/france/rochegude-drome-rochegude',
 'https://www.relaischateaux.com/fr/france/chateau-de-valmer-la-croix-valmer',
 'https://www.relaischateaux.com/fr/france/treyne-lot-lacave',
 'https://www.relaischateaux.com/fr/france/avenieres-haute-savoie-cruseilles',
 'https://www.relaischateaux.com/fr/france/adomenil-meurthe-et-moselle-luneville',
 'https://www.relaischateaux.com/fr/france/audrieu-calvados-audrieu',
 'https://www.relaischateaux.com/fr/france/clarance-hotel-nord',
 'https://www.relaischateaux.com/fr/france/coquillade-vaucluse-gargas',
 'https://www.relaischateaux.com/fr/france/crayeres-marne-reims',
 'https://www.relaischateaux.com/fr/france/rochevilaine-morbihan-billiers',
 'https://www.relaischateaux.com/fr/france/bretesche-loire-atlantique-missillac',
'https://www.relaischateaux.com/fr/france/auriac-aude-carcassonne',
 'https://www.relaischateaux.com/fr/france/flocons-haute-savoie-megeve',
 'https://www.relaischateaux.com/fr/france/blanc-ain-vonnas',
 'https://www.relaischateaux.com/fr/france/calarossa-corse-porto-vecchio',
 'https://www.relaischateaux.com/fr/france/liondor-loir-et-cher-romorantin-lanthenay',
 'https://www.relaischateaux.com/fr/france/albert-haute-savoie-chamonix-mont-blanc',
 'https://www.relaischateaux.com/fr/france/briqueterie-marne-vinay',
 'https://www.relaischateaux.com/fr/france/cheneaudiere-bas-rhin-colroy-la-roche',
 'https://www.relaischateaux.com/fr/france/levernois-cote-d-or-levernois-beaune',
 'https://www.relaischateaux.com/fr/france/plaisance-gironde-saint-emilion',
 'https://www.relaischateaux.com/fr/france/thierrydrapeau-vendee-saint-sulpice-le-verdon',
 'https://www.relaischateaux.com/fr/france/ile-de-la-lagune-saint-cyprien',
 'https://www.relaischateaux.com/fr/france/castellet-var-le-castellet',
 'https://www.relaischateaux.com/fr/france/crillonbrave-vaucluse-crillon-le-brave',
 'https://www.relaischateaux.com/fr/france/danielparis-paris',
 'https://www.relaischateaux.com/fr/france/garoupe-alpes-maritimes-cap-d-antibes',
 'https://www.relaischateaux.com/fr/france/chabichou-savoie-courchevel-1850',
 'https://www.relaischateaux.com/fr/france/barmes-de-l-ours-savoie',
 'https://www.relaischateaux.com/fr/france/parcvictoria-pyrenees-atlantiques-saint-jean-de-luz',
 'https://www.relaischateaux.com/fr/france/bise-haute-savoie-talloires',
 'https://www.relaischateaux.com/fr/france/clos-des-sens-haute-savoie',
 'https://www.relaischateaux.com/fr/france/hotel-restaurant-en-marge-aureville',
 'https://www.relaischateaux.com/fr/france/hotel-splendide-royal-paris',
 'https://www.relaischateaux.com/fr/france/laplage-finistere-sainte-anne-la-palud',
 'https://www.relaischateaux.com/fr/france/hotel-du-bois-blanc-ain-vonnas',
 'https://www.relaischateaux.com/fr/france/cimes-haute-loire-saint-bonnet-le-froid',
 'https://www.relaischateaux.com/fr/france/la-bouitte-savoie',
 'https://www.relaischateaux.com/fr/france/jivahill-ain-crozet',
 'https://www.relaischateaux.com/fr/france/auberge-basque-saint-pee-sur-nivelle-pyrenees-atlantiques72',
'https://www.relaischateaux.com/fr/france/labastide-gers-barbotan-les-thermes',
 'https://www.relaischateaux.com/fr/france/saintantoine-alpes-maritimes-grasse',
 'https://www.relaischateaux.com/fr/france/capelongue-vaucluse-bonnieux-en-provence',
 'https://www.relaischateaux.com/fr/france/tropez-var-saint-tropez',
 'https://www.relaischateaux.com/fr/france/bonneetape-alpes-de-haute-provence-chateau-arnoux',
 'https://www.relaischateaux.com/fr/france/chapelle-haute-vienne-nieul',
 'https://www.relaischateaux.com/fr/france/la-cote-saint-jacques-yonne-joigny',
 'https://www.relaischateaux.com/fr/france/simeon-calvados-honfleur',
'https://www.relaischateaux.com/fr/france/grande-maison-bernard-magrez-gironde-bordeaux',
 'https://www.relaischateaux.com/fr/france/lagrenouillere-pas-de-calais-la-madelaine-sous-montreuil',
 'https://www.relaischateaux.com/fr/france/maisonduzes-gard-uzes',
 'https://www.relaischateaux.com/fr/france/marcveyrat-haute-savoie-manigod',
 'https://www.relaischateaux.com/fr/france/pyramide-isere-vienne',
 'https://www.relaischateaux.com/fr/france/reservealbi-tarn-albi',
 'https://www.relaischateaux.com/fr/france/signoria-corse-calvi',
 'https://www.relaischateaux.com/fr/france/archange-alpes-maritimes',
 'https://www.relaischateaux.com/fr/france/lavilla-haute-corse-calvi',
 'https://www.relaischateaux.com/fr/france/marielouise-loire-atlantique-la-baule',
 'https://www.relaischateaux.com/fr/france/le-chambard-haut-rhin-kaysersberg',
 'https://www.relaischateaux.com/fr/france/chateaubeaulieu-pas-de-calais-busnes',
 'https://www.relaischateaux.com/fr/france/leclos-normandie-verneuil-sur-avre',
 'https://www.relaischateaux.com/fr/france/cavaliere-var-le-lavandou-cavaliere',
 'https://www.relaischateaux.com/fr/france/minimes-alpes-de-haute-provence-mane',
 'https://www.relaischateaux.com/fr/france/verchant-herault-montpellier',
 'https://www.relaischateaux.com/fr/france/grandcoeur-savoie-meribel',
 'https://www.relaischateaux.com/fr/france/vefour-paris',
 'https://www.relaischateaux.com/fr/france/maspierre-alpes-maritimes-saint-paul-de-vence',
 'https://www.relaischateaux.com/fr/france/masherbes-vaucluse-joucas',
 'https://www.relaischateaux.com/fr/france/passedat-bouches-du-rhone-marseille',
 'https://www.relaischateaux.com/fr/france/phebus-vaucluse-gordes',
 'https://www.relaischateaux.com/fr/france/leprieure-gard-villeneuve-lez-avignon',
 'https://www.relaischateaux.com/fr/france/catelan-paris',
 'https://www.relaischateaux.com/fr/france/loiseau-cote-d-or-saulieu',
 'https://www.relaischateaux.com/fr/france/stjames-gironde-bouliac',
 'https://www.relaischateaux.com/fr/france/stpaul-alpes-maritimes-saint-paul-de-vence',
 'https://www.relaischateaux.com/fr/france/bras-aveyron-laguiole',
 'https://www.relaischateaux.com/fr/france/taillevent-paris',
 'https://www.relaischateaux.com/fr/france/vieuxlogis-dordogne-tremolat',
 'https://www.relaischateaux.com/fr/france/basrupts-vosges-gerardmer',
 'https://www.relaischateaux.com/fr/france/palombaggia-corse-du-sud-porto-vecchio',
 'https://www.relaischateaux.com/fr/france/hautesroches-indre-et-loire-rochecorbon',
 'https://www.relaischateaux.com/fr/france/hauts-loire-loir-et-cher-onzain',
 'https://www.relaischateaux.com/fr/france/bricourt-ille-et-vilaine-saint-meloir-des-ondes',
 'https://www.relaischateaux.com/fr/france/guerard-landes-eugenie-les-bains',
 'https://www.relaischateaux.com/fr/france/lucascarton-ile-de-france-paris',
 'https://www.relaischateaux.com/fr/france/arnsbourg-moselle-baerenthal',
 'https://www.relaischateaux.com/fr/france/toiras-charente-maritime-saint-martin-de-re',
 'https://www.relaischateaux.com/fr/france/oasis-alpes-maritimes-la-napoule',
 'https://www.relaischateaux.com/fr/france/decoret-allier-vichy',
 'https://www.relaischateaux.com/fr/france/hotel-laposte-doucet-saone-et-loire',
 'https://www.relaischateaux.com/fr/france/lameloise-saone-et-loire-chagny',
 'https://www.relaischateaux.com/fr/france/pic-drome-valence',
 'https://www.relaischateaux.com/fr/france/rostang-paris',
 'https://www.relaischateaux.com/fr/france/lankerellec-cotes-d-armor-trebeurden',
 'https://www.relaischateaux.com/fr/france/marquis-faubourg-saint-honore-ile-de-france-paris',
'https://www.relaischateaux.com/fr/france/aubergade-lot-et-garonne-puymirol',
 'https://www.relaischateaux.com/fr/france/montecarlo-alpes-maritimes-roquebrune-cap-martin',
 'https://www.relaischateaux.com/fr/france/moulin-dordogne-brantome-en-perigord',
'https://www.relaischateaux.com/fr/france/pandei-var-saint-tropez',
 'https://www.relaischateaux.com/fr/france/passage53-paris',
 'https://www.relaischateaux.com/fr/france/gagnaire-paris',
 'https://www.relaischateaux.com/fr/france/poste-landes-magescq',
 'https://www.relaischateaux.com/fr/france/alexandre-gard-garons',
 'https://www.relaischateaux.com/fr/france/coutanceau-charente-maritime-la-rochelle',
 'https://www.relaischateaux.com/fr/france/gill-seine-maritime-rouen',
 'https://www.relaischateaux.com/fr/france/restaurant-greuze-tournus',
 'https://www.relaischateaux.com/fr/france/lassausaie-rhone-alpes-chasselay',
 'https://www.relaischateaux.com/fr/france/mirazur-alpes-maritimes-menton',
'https://www.relaischateaux.com/fr/france/orsi-rhone-lyon',
'https://www.relaischateaux.com/fr/france/vieira-cantal',
'https://www.relaischateaux.com/fr/france/royalchampagne-marne-champillon',
'https://www.relaischateaux.com/fr/france/saintjames-paris-ile-de-france-paris',
'https://www.relaischateaux.com/fr/france/yaktsa-alpes-maritimes-theoule-sur-mer',
'https://www.relaischateaux.com/fr/france/troisgros-loire-ouches',
'https://www.relaischateaux.com/fr/france/florentine-rhone-lyon',
'https://www.relaischateaux.com/fr/france/gallici-bouches-du-rhone-aix-en-provence',
'https://www.relaischateaux.com/fr/france/lalique-bas-rhin',
'https://www.relaischateaux.com/fr/france/yoannconte-haute-savoie-veyrier-du-lac'
]



//console.log(RestoUrls.length);
module.exports = hotelUrls;