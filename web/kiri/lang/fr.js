// French localization for Kiri:Moto
// Will defer to English map for any missing key/value pairs
kiri.lang['fr'] =
kiri.lang['fr-fr'] = {
    // common keys and menus
    animate:        "animer",       // CAM animate button
    arrange:        "organiser",     // layout workspace objects
    axis:           "axe",          // left object scale pop menu
    clear:          "effacer",  // clear workspace (remove all objects)
    copy:           "copier",
    delete:         "supprimer",
    detail:         "détail",
    done:           "terminé",
    enable:         "permettre",
    export:         "exporter",
    files:          "fichiers",
    help:           "aide",
    ghost:          "translucide",  // left render pop menu (wireframe)
    hide:           "cacher",       // left render pop menu (invisible)
    home:           "position d'origine",
    import:         "importer",
    language:       "langue",
    machine:        "machine",      // device or machine
    metric:         "métrique",
    name:           "nom",
    prefs:          "préfs",        // left menu "preferences"
    preview:        "prévisualiser",
    recent:         "récent",
    render:         "rendu",       // left render pop menu
    reset:          "remettre",
    rotate:         "tourner",      // left rotate pop menu
    save:           "sauvegarder",
    scale:          "échelle",      // left object scale pop menu
    setup:          "setup",
    settings:       "paramètres",
    size:           "taille",
    solid:          "solide",       // view type pop menu
    tool:           "outil",
    tools:          "outils",       // CAM tool menu button
    top:            "haut",
    type:           "genre",        // CAM tool type
    version:        "version",
    view:           "vue",          // left view pop menu
    wire:           "filaire",      // left render pop menu

    acct_xpo:       ["faites une sauvegarde de votre machine","et des profils des machines avec","l'option d'inclure les","objets et positions d'environnement"],

    // RIGHT-CLICK CONTEXT MENU
    rc_clws:        "effacer l'environnement",
    rc_xpws:        "exporter l'environnement",
    rc_lafl:        "poser à plat",
    rc_mirr:        "refléter",
    rc_dupl:        "dupliquer",
    rc_xstl:        "exporter en STL",

    // DEVICE MENU and related dialogs
    dm_sldt:        "sélectionner un genre de machine",
    dm_stdd:        "machines standards",
    dm_mydd:        "mes machines",
    dm_seld:        "machine sélectionnée",
    dm_rcnt:        "fichiers récents",
    dm_savs:        "paramètres sauvegardés",
    dm_appp:        "Préférences d'Application",

    // CAM Tool Dialog
    td_tyem:        "end",          // end mill
    td_tybm:        "ball",         // ball mill
    td_tytm:        "taper",        // taper mill
    td_tonm:        "tool #",
    td_shft:        "shaft",        // endmill shaft specs
    td_flut:        "flute",        // endmill flute specs
    td_tapr:        "taper",        // endmill taper specs

    // DEVICE dialog groups
    dv_gr_dev:      "périphérique",
    dv_gr_ext:      "extrudeur",
    dv_gr_out:      "sortie",
    dv_gr_gco:      "macros gcode",

    // DEVICE dialog (_s = label, _l = hover help)
    dv_name_s:      "nom",
    dv_name_l:      "nom du matériel",
    dv_fila_s:      "filament",
    dv_fila_l:      "diamètre en millimètres",
    dv_nozl_s:      "buse",
    dv_nozl_l:      "diamètre en millimètres",
    dv_bedw_s:      "largeur",
    dv_bedw_l:      "unités de l'espace de travail",
    dv_bedd_s:      "profondeur",
    dv_bedd_l:      "unités de l'espace de travail",
    dv_bedh_s:      "hauteur",
    dv_bedh_l:      ["hauteur de construction maximale","en unités de l'espace de travail"],
    dv_spmx_s:      "max spindle",
    dv_spmx_l:      ["max spindle rpm speed","0 to disable"],
    dv_xtab_s:      "positionnement absolu",
    dv_xtab_l:      "déplacements extrusion absolu",
    dv_orgc_s:      "origine au centre",
    dv_orgc_l:      "origin du plateau au centre",
    // dv_orgt_s:      "origin top",
    // dv_orgt_l:      "part z origin top",
    dv_bedc_s:      "plateau circulaire",
    dv_bedc_l:      "le plateau du matériel est circulaire",
    dv_belt_s:      "plateau tapis-roulant",
    dv_belt_l:      "plateau à impression continue",
    dv_fanp_s:      "refroidissement",
    dv_fanp_l:      "régler la puissance du ventilateur de refroidissement",
    dv_prog_s:      "progression",
    dv_prog_l:      "résultats de chaque % de progression",
    dv_layr_s:      "couche",
    dv_layr_l:      ["résultats de chaque","changement de couche"],
    dv_tksp_s:      "délimiteur d'instruction",
    dv_tksp_l:      ["ajouter un espace","entre les paramètres des axes","G0X0Y0X0","vs","G0 X0 Y0 Z0"],
    dv_strc_s:      "éliminer les commentaires",
    dv_strc_l:      ["éliminer les commentaires du gcode","les commentaires débutent par ;"],
    dv_fext_s:      "extension du fichier",
    dv_fext_l:      "extension du nom de fichier",
    dv_dwll_s:      "dwell",
    dv_dwll_l:      "script gcode dwell",
    dv_tool_s:      "changement d'outil",
    dv_tool_l:      "script de changement d'outil",
    dv_sspd_s:      "spindle speed",
    dv_sspd_l:      "set spindle speed",
    dv_paus_s:      "pause",
    dv_paus_l:      "script gcode de pause",
    dv_head_s:      "header",
    dv_head_l:      "script gcode de démarrage",
    dv_foot_s:      "footer",
    dv_foot_l:      "script gcode de fin",
    dv_lzon_s:      "laser on",
    dv_lzon_l:      "gcode laser on script",
    dv_lzof_s:      "laser off",
    dv_lzof_l:      "gcode laser off script",
    dv_exts_s:      "sélectionner",
    dv_exts_l:      "gcode pour activer cet extrudeur",
    dv_dext_s:      "désélectionner",
    dv_dext_l:      "gcode à lancer avant d'activer un autre extrudeur",
    dv_extd_s:      "désélectionner",
    dv_extd_l:      "gcode pour désactiver cet extrudeur",
    dv_exox_s:      "décalage x",
    dv_exox_l:      "décalage de buse en x",
    dv_exoy_s:      "décalage y",
    dv_exoy_l:      "décalage de buse en y",

    // MODE
    mo_menu:        "mode",
    mo_fdmp:        "Impression FDM",
    mo_slap:        "Impression SLA",
    mo_lazr:        "Découpe / gravure Laser",
    mo_cncm:        "Routeur CNC",

    // SETUP
    su_menu:        "installation",
    su_devi:        "Matériels",
    su_tool:        "Outils",
    su_locl:        "Local",
    su_xprt:        "Exporter",
    su_help:        "Aide",

    // LOAD
    fe_menu:        "fichier",
    fn_recn:        "Récents",
    fn_impo:        "Importer",

    // FUNCTION
    fn_menu:        "action",
    fn_arra:        "Organiser",
    fn_slic:        "Découper",
    fn_prev:        "Prévisualiser",
    fn_expo:        "Exporter",

    // VIEW
    vu_menu:        "vue",
    vu_home:        "Origine",
    vu_rset:        "RAZ",
    vu_sptp:        "Haut",
    vu_spfr:        "Avant",
    vu_splt:        "Gauche",
    vu_sprt:        "Droite",

    // WORKSPACE
    ws_menu:        "vue",
    ws_save:        "Sauvegarder",
    ws_cler:        "Effacer",

    // OPTIONS
    op_menu:        "interface",
    op_disp:        "affichage",
    op_xprt_s:      "expert",
    op_xprt_l:      "afficher plus d'options de paramétrage",
    op_decl_s:      "logos",
    op_decl_l:      "montrer les logos des appareils",
    op_dang_s:      "expérimental",
    op_dang_l:      "montrer les paramètres expérimentaux",
    op_hopo_s:      "survol du menu",
    op_hopo_l:      ["activer le survol du menu", "pour activer"],
    op_dark_s:      "mode sombre",
    op_dark_l:      "interface en mode sombre",
    op_comp_s:      "ui compacte",
    op_comp_l:      ["interface utilisateur compacte", "plus adapté aux petits écrans", "et tablettes"],
    op_shor_s:      "montrer l'origine",
    op_shor_l:      "indiquer l'origine du dispositif ou du processus",
    op_shru_s:      "afficher les règles",
    op_shru_l:      ["montrer les règles des axes", "sur le quadrillage"],
    op_sped_s:      "afficher les vitesses",
    op_sped_l:      ["afficher la vitesse en barre de couleur","en mode prévisualisation"],
    op_auto_s:      "disposition automatique",
    op_auto_l:      ["disposition automatique sur le plateau", "lorsque de nouveaux éléments sont ajoutés"],
    op_free_s:      "disposition libre",
    op_free_l:      ["autoriser la disposition déplaçable","sans effet en mode laser"],
    op_spcr_s:      "espacement",
    op_spcr_l:      ["espacement entre les objets", "avec la disposition automatique", "en unités d'espace de travail"],
    op_invr_s:      "inverser zoom",
    op_invr_l:      ["inverser la molette de la souris", "faire défiler le zoom"],
    op_save_s:      "auto enregt",
    op_save_l:      ["préserve les objets dans l'espace de travail","entre rechargement de l'application"],
    op_line_s:      "type de ligne",
    op_line_l:      ["style de ligne pour le rendu","impacte les performances 3d","chemin: 3d meilleur","plat: 2d bon","ligne = 1d rapide"],
    op_unit_s:      "unités",
    op_unit_l:      ["les unités d'espace de travail affectent".,"vitesses et distances"],
    op_anim_s:      "animer",
    op_anim_l:      ["densité du maillage de l'animation","plus haut = plus dense","nécessite plus de mémoire","et est plus lent"],

    lo_menu:        "disposition",

    pt_menu:        "pièces",
    pt_deci_s:      "compression",
    pt_deci_l:      ["activer / désactiver la compression","durant l'importation. Tranchage plus rapide","et usage réduit de la mémoire"],
    pt_qual_s:      "qualité",
    pt_qual_l:      ["niveau de détail à garder", "lors des opérations de tranchage", "plus bas = plus rapide"],
    pt_heal_s:      "correction de maillage",
    pt_heal_l:      ["tentative de correction", "des mailles non-fermées", "accroit le temps de tranchage"],

    xp_menu:        "exports",

    // SETTINGS
    se_menu:        "profil",
    se_load:        "charger",
    se_save:        "sauvegarder",

    // FDM SLICING
    sl_menu:        "couches",
    sl_lahi_s:      "hauteur",
    sl_lahi_l:      ["hauteur de chaque couche", "couche en millimètres"],
    ad_minl_s:      "hauteur min",
    ad_minl_l:      ["hauteur de couche minimale adaptative", "en millimètres", "doit être non nulle"],
    sl_ltop_s:      "couches du haut",
    sl_ltop_l:      ["nombre de couches solides", "à appliquer en", "haut de l'impression"],
    sl_lsld_s:      "couches solides",
    sl_lsld_l:      ["zones de remplissage solide calculées", "à partir des deltas de couches. voir", "menu surgissant des couches"],
    sl_lbot_s:      "couches de base",
    sl_lbot_l:      ["nombre de couches solides", "à appliquer en", "bas de l'impression"],
    ad_adap_s:      "adaptive",
    ad_adap_l:      ["utiliser des hauteurs de couche adaptatives", "avec "hauteur de couche" en maximum", "et "hauteur min" en minimum"],

    // FDM SHELLS
    sl_shel_s:      "parois",
    sl_shel_l:      ["nombre de périmètre", "murs à générer"],
    sl_ordr_s:      "ordre des parois",
    sl_ordr_l:      ["ordre d'impression des parois","de l'intérieur vers l'extérieur", "ou de l'extérieur vers l'intérieur","affecte la qualité de surface"],
    sl_strt_s:      "début de couche",
    sl_strt_l:      ["point de départ de la couche", "dernier = fin de la couche", "centre = centre de la pièce", "origine = origine du dispositif"],
    ad_thin_s:      "parois fines",
    ad_thin_l:      ["détecte et comble les vides", "entre les parois de la coque"],

    // FDM FILL
    fi_menu:        "remplissage",
    fi_type:        "type",
    fi_pcnt_s:      "fraction de remplissage",
    fi_pcnt_l:      ["valeurs de densité de remplissage","0.0 - 1.0"],
    fi_angl_s:      "départ solide",
    fi_angl_l:      ["angle de départ en degrés", "90 degrés ajoutés à ", "chaque couche suivante", "s'applique uniquement aux couches solides"],
    fi_over_s:      "chevauchement",
    fi_over_l:      ["chevauchement de l'enveloppe et du remplissage", "en tant que fraction du diamètre de la buse", "0,0 - 1,0"],
    // fi_rate_s:      "vitesse d'impression",
    fi_rate_l:      ["vitesse d'extrusion du remplissage", "régler à 0 pour utiliser par défaut", "la vitesse d'impression"],

    // FDM FIRST LAYER
    fl_menu:        "base",
    fl_lahi_s:      "hauteur de couche",
    fl_lahi_l:      ["hauteur de chaque couche", "en millimètres", "devrait être >= hauteur de la couche"],
    fl_rate_s:      "vitesse périmètres",
    fl_rate_l:      ["vitesse maximale d'impression des coques", "en millimètres / minute"],
    fl_frat_s:      "vitesse remplissage",
    fl_frat_l:      ["vitesse maximale d'impression du remplissage", "en millimètres / minute"],
    fl_mult_s:      "débit",
    fl_mult_l:      ["multiplicateur d'extrusion","0.0 - 2.0"],
    fl_sfac_s:      "largeur",
    fl_sfac_l:      ["multiplicateur de la taille de la buse", "modifie l'espacement des lignes"],
    fl_skrt_s:      "jupe nb",
    fl_skrt_l:      ["nombre de lignes de la jupe", "à générer pour la première couche"],
    fl_skro_s:      "décalage bordure",
    fl_skro_l:      ["jupe décalée de la partie", "en millimètres"],
    fl_nozl_s:      "buse",
    fl_nozl_l:      ["degrés en Celsius", "réglage de sortie utilisé", "lorsque celui-ci est égal à zéro"],
    fl_bedd_s:      "température plateau",
    fl_bedd_l:      ["degrés en Celsius", "réglage de sortie utilisé", "lorsque celui-ci est égal à zéro"],
    fr_spac_s:      "écart radeau",
    fr_spac_l:      ["espacement des couches supplémentaires", "entre la 1ère couche et le radeau", "en millimètres"],
    fr_nabl_s:      "activer un radeau",
    fr_nabl_l:      ["créer un radeau sous le ", "modèle pour une meilleure adhérence", "utilise le décalage des jupes et", "désactive la sortie des jupes"],

    // FDM BELT ONLY
    fl_zoff_s:      "décalage bande",
    fl_zoff_l:      ["décalage de hauteur par rapport à la bande", "de l'extrusion la plus basse", "en millimètres"],
    fl_brim_s:      "taille de bordure",
    fl_brim_l:      ["ajoute une bordure à la partie inférieure","la taille est la largeur en millimètres","0 désactive"],
    fl_brmn_s:      "seuil de bordure",
    fl_brmn_l:      ["ajout de bordures uniquement quand le segment", "face à la bande est plus court que cela", "valeur en millimètres", "0 = infini"],
    fl_bled_s:      "ancrage de pièce",
    fl_bled_l:      ["ancrage de la pièce sur la bande", "au début de l'impression", "en millimètres"],

    // FDM SUPPORT
    sp_menu:        "support",
    sp_detect:      "détecter",
    sp_dens_s:      "densité",
    sp_dens_l:      ["fraction 0.0 - 1.0","recommendé 0.15","0 désactive"],
    sp_size_s:      "taille pilier",
    sp_size_l:      ["largeur du pilier","en millimètres"],
    sp_offs_s:      "décalage du pilier",
    sp_offs_l:      ["décalage par rapport à la pièce","en millimètres"],
    sp_gaps_s:      "écart des couches",
    sp_gaps_l:      ["nombre de couches","de décalage de la pièce"],
    sp_span_s:      "portée maximale",
    sp_span_l:      ["portée non soutenue nécessitant", "un nouveau soutien à générer","en millimètres"],
    sp_angl_s:      "angle max",
    sp_angl_l:      ["angle de surplomb maximum avant", "de générer un pilier de soutien"],
    sp_area_s:      "surface min",
    sp_area_l:      ["surface minimale de","la colonne support","en millimètres"],
    sp_xpnd_s:      "étendre",
    sp_xpnd_l:      ["étendre la zone de soutien", "au-delà des limites d'une pièce","en millimètres"],
    sp_nozl_s:      "extrudeur",
    sp_nozl_l:      ["dans les systèmes multi-extrudeurs", "l'extrudeur à utiliser pour", "le matériau de support"],
    sp_auto_s:      "automatique",
    sp_auto_l:      ["activer les supports générés", "utiliser la géométrie at-slice-time", "les supports n'apparaîtront", "qu'une fois le tranchage terminé"],

    // LASER SLICING
    ls_offs_s:      "offset",
    ls_offs_l:      ["adjust for beam width","en millimètres"],
    ls_lahi_s:      "height",
    ls_lahi_l:      ["layer height","in millimeters","0 = auto/detect"],
    ls_lahm_s:      "min",
    ls_lahm_l:      ["layer height minimum","will merge auto slices","under this thickness","in millimeters"],
    ls_sngl_s:      "single",
    ls_sngl_l:      ["perform only one slice","at specified layer height"],

    // CNC COMMON terms
    cc_tool:        "tool",
    cc_offs_s:      "offset",
    cc_offs_l:      ["offset tool center","from chosen path"],
    cc_spnd_s:      "spindle rpm",
    cc_spnd_l:      ["spindle speed in","revolutions / minute"],
    cc_sovr_s:      "step over",
    cc_sovr_l:      ["as a fraction of","tool diameter"],
    cc_sdwn_s:      "step down",
    cc_sdwn_l:      ["step down depth","for each pass","in workspace units","0 to disable"],
    cc_feed_s:      "feed rate",
    cc_feed_l:      ["max cutting speed in","workspace units / minute"],
    cc_plng_s:      "plunge rate",
    cc_plng_l:      ["max z axis speed in","workspace units / minute"],
    cc_sngl_s:      "select lines only",
    cc_sngl_l:      ["select only single edges","instead of connected polylines"],

    // CNC COMMON
    cc_menu:        "limits",
    cc_flip:        "flip",
    cc_rapd_s:      "xy feed",
    cc_rapd_l:      ["max xy moves feedrate","in workspace units / minute"],
    cc_rzpd_s:      "z feed",
    cc_rzpd_l:      ["max z moves feedrate","in workspace units / minute"],

    cc_loff_s:      "offset",
    cc_loff_l:      ["distance from stock face","for leveling pass","in workspace units"],

    // CNC ROUGHING
    cr_menu:        "rough",
    cr_lsto_s:      "leave stock",
    cr_lsto_l:      ["horizontal offset from vertical faces","stock to leave for finishing pass","in workspace units"],
    cr_ease_s:      "ease down",
    cr_ease_l:      ["plunge cuts will","spiral down or ease","along a linear path"],
    cr_clrt_s:      "clear top",
    cr_clrt_l:      ["run a clearing pass over","the bounding area of the part","at z = 0"],
    cr_clrp_s:      "clear voids",
    cr_clrp_l:      ["mill out through pockets","instead of just the outline"],
    cr_clrf_s:      "clear faces",
    cr_clrf_l:      ["interpolate step down to","clear any detected flat areas"],
    cr_olin_s:      "inside only",
    cr_olin_l:      ["limit cutting to","inside part boundaries"],

    // CNC OUTLINE
    co_menu:        "outline",
    co_dogb_s:      "dogbones",
    co_dogb_l:      ["insert dogbone cuts","into inside corners"],
    co_wide_s:      "wide cutout",
    co_wide_l:      ["widen outside cutout paths","for deep cuts in hard material"],
    co_olin_s:      "inside only",
    co_olin_l:      ["limit cutting to","inside part boundaries"],
    co_olot_s:      "outside only",
    co_olot_l:      ["limit cutting to","exterior part boundaries","which can be thought of","as the shadow outline"],
    co_omit_s:      "omit through",
    co_omit_l:      "eliminate thru holes",
    co_olen_s:      "enable",
    co_olen_l:      "enabled outline cutting",

    // CNC CONTOUR
    cn_menu:        "contour",
    cf_angl_s:      "max angle",
    cf_angl_l:      ["angles greater than this","are considered vertical"],
    cf_curv_s:      "curves only",
    cf_curv_l:      ["limit linear cleanup","to curved surfaces"],
    cf_olin_s:      "inside only",
    cf_olin_l:      ["limit cutting to","inside part boundaries"],
    cf_linx_s:      "enable y pass",
    cf_linx_l:      "linear y-axis finishing",
    cf_liny_s:      "enable x pass",
    cf_liny_l:      "linear x-axis finishing",

    // CNC TRACE
    cu_menu:        "trace",
    cu_type_s:      "type",
    cu_type_l:      ["follow = tool tip follows line","right or left = tool tip","follows line offset by tool radius"],

    // CNC DRILLING
    cd_menu:        "drill",
    cd_axis:        "axis",
    cd_points:      "points",
    cd_plpr_s:      "plunge per",
    cd_plpr_l:      ["max plunge between","dwell periods","in workspace units","0 to disable"],
    cd_dwll_s:      "dwell time",
    cd_dwll_l:      ["dwell time","between plunges in","in milliseconds"],
    cd_lift_s:      "drill lift",
    cd_lift_l:      ["lift between plunges","after dwell period","in workspace units","0 to disable"],
    cd_regi_s:      "register",
    cd_regi_l:      ["drill registration holes","for double-sided parts","independent of enable","drilling but uses same","tool and settings"],

    // CNC CUTOUT TABS
    ct_menu:        "tabs",
    ct_angl_s:      "angle",
    ct_angl_l:      ["starting angle for tab spacing","in degrees (0-360)"],
    ct_numb_s:      "count",
    ct_numb_l:      ["number of tabs to use","will be spaced evenly","around the part"],
    ct_wdth_s:      "width",
    ct_wdth_l:      "width in workspace units",
    ct_hght_s:      "height",
    ct_hght_l:      "height in workspace units",
    ct_dpth_s:      "depth",
    ct_dpth_l:      ["distance in workspace units","that the tab projects from","the part surface"],
    ct_midl_s:      "midline",
    ct_midl_l:      ["use midline of tab","instead of z bottom","for double-sided work"],
    ct_nabl_s:      "auto",
    ct_nabl_l:      ["auto generate radial tabs","projected from part center","using count and angle offset"],

    // OUTPUT
    ou_menu:        "sortie",

    // LASER KNIFE
    dk_menu:        "knife",
    dk_dpth_s:      "cut depth",
    dk_dpth_l:      ["final cut depth","in millimeters"],
    dk_pass_s:      "cut passes",
    dk_pass_l:      ["number of passes","down to cut depth"],
    dk_offs_s:      "tip offset",
    dk_offs_l:      ["distance from blade tip","to center of tool","in millimeters"],

    // OUTPUT LASER
    ou_spac_s:      "spacing",
    ou_spac_l:      ["distance between layer output","in millimeters"],
    ou_scal_s:      "scaling",
    ou_scal_l:      "multiplier (0.1 to 100)",
    ou_powr_s:      "power",
    ou_powr_l:      ["0 - 100","represents %"],
    ou_sped_s:      "speed",
    ou_sped_l:      "millimeters / minute",
    ou_mrgd_s:      "merged",
    ou_mrgd_l:      ["merge all layers using","color coding to denote","stacking depth"],
    ou_grpd_s:      "grouped",
    ou_grpd_l:      ["retain each layer as","a unified grouping","instead of separated","polygons"],
    ou_layr_s:      "layer order",
    ou_layr_l:      ["output layer order","from top right to","bottom left"],
    ou_layo_s:      "layer color",
    ou_layo_l:      ["output layer colors","for each z index","overridden by merged"],
    ou_drkn_s:      "drag knife",
    ou_drkn_l:      ["enable drag knife","output in gcode","cut radii are added","to corners with","cut down passes"],

    // OUTPUT FDM
    ou_nozl_s:      "température buse",
    ou_nozl_l:      "degrés en celsius",
    ou_bedd_s:      "température plateau",
    ou_bedd_l:      "degrés en celsius",
    ou_feed_s:      "vitesse impression",
    ou_feed_l:      ["vitesse d'impression maximale","millimètres / minute"],
    ou_fini_s:      "vitesse coque",
    ou_fini_l:      ["vitesse de la coque extérieure","millimètres / minute"],
    ou_move_s:      "vitesse déplacement",
    ou_move_l:      ["vitesse de déplacement sans impression","millimètres / minute","0 = active déplacements G0"],
    ou_shml_s:      "débit de coque",
    ou_flml_s:      "débit de solidité",
    ou_spml_s:      "débit de remplissage",
    ou_exml_l:      ["multiplicateur d'extrusion","0.0 - 2.0"],
    ou_fans_s:      "vitesse ventilateur",
    ou_fans_l:      "0 - 255",

    // OUTPUT CAM
    ou_toll_s:      "tolerance",
    ou_toll_l:      ["surface precision","in workspace units","lower is slower and","uses more memory","0 = automatic based","on animate preference"],
    ou_zanc_s:      "z anchor",
    ou_zanc_l:      ["controls the position of the part","when stock Z exceeds part Z"],
    ou_ztof_s:      "z offset",
    ou_ztof_l:      ["offset z anchor","in workspace units","has no effect when","anchor is middle"],
    ou_zbot_s:      "z bottom",
    ou_zbot_l:      ["offset from part bottom","to limit cutting depth","in workspace units"],
    ou_zclr_s:      "z clearance",
    ou_zclr_l:      ["safe travel offset","from top of part","in workspace units"],
    ou_ztru_s:      "z thru",
    ou_ztru_l:      ["extend cutout pass down","in workspace units"],
    ou_conv_s:      "conventional",
    ou_conv_l:      ["milling direction","uncheck for 'climb'"],
    ou_depf_s:      "depth first",
    ou_depf_l:      ["optimize pocket cuts","with depth priority"],

    // CAM STOCK
    cs_menu:        "stock",
    cs_wdth_s:      "width",
    cs_wdth_l:      ["width (x) in workspace units","0 defaults to part size"],
    cs_dpth_s:      "depth",
    cs_dpth_l:      ["depth (y) in workspace units","0 defaults to part size"],
    cs_hght_s:      "height",
    cs_hght_l:      ["height (z) in workspace units","0 defaults to part size"],
    cs_offs_s:      "offset",
    cs_offs_l:      ["use width, depth, height","as offsets from max","part size on platform"],
    cs_clip_s:      "clip to",
    cs_clip_l:      ["rough and outline","clip cutting paths","to defined stock"],
    cs_offe_s:      "enable",
    cs_offe_l:      "enable milling stock",

    // ORIGIN (CAM & LASER)
    or_bnds_s:      "origin bounds",
    or_bnds_l:      ["origin is relative to","boundary of all objects"],
    or_cntr_s:      "origin center",
    or_cntr_l:      "origin is referenced from the center",
    or_topp_s:      "origin top",
    or_topp_l:      "origin is references from the top of objects",

    // FDM ADVANCED
    ad_menu:        "expert",
    ad_rdst_s:      "distance de rétraction",
    ad_rdst_l:      ["longueur de filament à rétracter", "pour les longs mouvements. en millimètres"],
    ad_rrat_s:      "vitesse de rétraction",
    ad_rrat_l:      ["vitesse de rétraction","du filament en mm/s"],
    ad_rdwl_s:      "réenclencher",
    ad_wpln_s:      "essuyage rétractation",
    ad_wpln_l:      ["mouvement sans impression", "après rétraction", "en millimètres"],
    ad_rdwl_l:      ["durée de réenclenchement", "filament et mouvement", "en millisecondes"],
    ad_scst_s:      "cabotage",
    ad_scst_l:      ["extrémité non imprimée", "des coques du périmètre", "en millimètres"],
    ad_msol_s:      "min solide",
    ad_msol_l:      ["aire minimale (mm^2)","requise pour rester solide","doit être > 0.1"],
    ad_mins_s:      "vitesse minimale",
    ad_mins_l:      ["vitesse minimale","des segments courts"],
    ad_spol_s:      "chemin court",
    ad_spol_l:      ["les polygones plus courts", "auront la vitesse réduite et", "seront ramenés à la vitesse minimale", "en millimètres"],
    ad_arct_s:      "tolérance arc",
    ad_arct_l:      ["convertir les lignes des facettes en arcs", "tolérance de dérive du point central", "lors de la correspondance des points d'arc", "considérer les valeurs autour de 0,15", "en millimètres", "0 désactive"],
    ad_zhop_s:      "décalage en Z",
    ad_zhop_l:      ["levée du z","sur les mouvements de rétraction", "en millimètres", "0 désactive"],
    ad_abkl_s:      "anti-backlash",
    ad_abkl_l:      ["pour une meilleure finition de la surface plane", "utiliser des micro-mouvements pour annuler", "le jeu dans la sortie de la couche solide", "en millimètres", "0 désactive", "si le firmware reconnait le M425", "l'utiliser dans l'en-tête du gcode", "et mettre à 0"],
    ad_lret_s:      "rétraction au changement de couche",
    ad_lret_l:      ["forcer la rétraction du filament", "entre les couches"],
    ad_play_s:      "couches de polissage",
    ad_play_l:      ["polir jusqu'au nombre spécifié", "# de couches à la fois"],
    ad_pspd_s:      "vitesse de polissage",
    ad_pspd_l:      ["vitesse de polissage", "en millimètres / minute"],

    // CAM EXPERT
    cx_fast_s:      "skip shadow",
    cx_fast_l:      ["disable overhang detection","can be faster and use less","memory with complex models","but fails with overhangs","try enabling if slicing","hangs during shadowing"],

    // FDM GCODE
    ag_menu:        "gcode",
    ag_nozl_s:      "buse",
    ag_nozl_l:      "sélectionner la buse ou la tête d'impression",
    ag_paws_s:      "couches de pause",
    ag_paws_l:      ["liste de couches séparées par des virgules", "pour injecter des commandes de pause avant"],
    ag_loop_s:      "couches de répétitions",
    ag_loop_l:      ["des plages de couches à répéter dans le format ", "premier-compte dernier,premier-compte dernier,...", "compte omis = 1"],

    // SLA MENU
    sa_menu:        "tranchage",
    sa_lahe_s:      "hauteur de couche",
    sa_lahe_l:      ["hauteur de couche","en millimètres"],
    sa_shel_s:      "hollow shell",
    sa_shel_l:      ["shell thickness in mm","use multiple of layer height","use 0 for solid (disabled)"],
    sa_otop_s:      "open top",
    sa_otop_l:      ["if shell is enabled","results in an open top"],
    sa_obas_s:      "open base",
    sa_obas_l:      ["if shell is enabled","results in an open base","disabled with supports"],

    sa_layr_m:      "layers",
    sa_lton_s:      "light on time",
    sa_lton_l:      ["layer light on","time in seconds"],
    sa_ltof_s:      "light off time",
    sa_ltof_l:      ["layer light off","time in seconds"],
    sa_pldi_s:      "peel distance",
    sa_pldi_l:      ["peel distance","in millimeters"],
    sa_pllr_s:      "peel lift rate",
    sa_pllr_l:      ["peel lift speed","in mm/sec"],
    sa_pldr_s:      "peel drop rate",
    sa_pldr_l:      ["peel drop speed","in mm/sec"],

    sa_base_m:      "base",
    sa_balc_s:      "layer count",
    sa_balc_l:      ["number of","base layers"],
    sa_bltn_l:      ["base layer light on","time in seconds"],
    sa_bltf_l:      ["base layer light off","time in seconds"],

    sa_infl_m:      "infill",
    sa_ifdn_s:      "density",
    sa_ifdn_l:      ["percent infill","requires shell","0 = disabled","valid 0.0 - 1.0"],
    sa_iflw_s:      "line width",
    sa_iflw_l:      ["hatch line width","in millimeters"],

    sa_supp_m:      "support",
    sa_slyr_s:      "base layers",
    sa_slyr_l:      ["base support layers","value range 0-10"],
    sa_slgp_s:      "gap layers",
    sa_slgp_l:      ["number of layers between","raft and bottom of object"],
    sa_sldn_s:      "density",
    sa_sldn_l:      ["used to compute the","number of support pillars","0.0-1.0 (0 = disable)"],
    sa_slsz_s:      "size",
    sa_slsz_l:      ["max size of a","support pillar","in millimeters"],
    sa_slpt_s:      "points",
    sa_slpt_l:      ["number of points in","each support pillar","in millimeters"],
    sl_slen_l:      "enable supports",

    sa_outp_m:      "output",
    sa_opzo_s:      "z offset",
    sa_opzo_l:      ["z layer offset","almost always 0.0","0.0-1.0 in millimeters"],
    sa_opaa_s:      "anti alias",
    sa_opaa_l:      ["enable anti-aliasing","produces larger files","can blur details"]
};