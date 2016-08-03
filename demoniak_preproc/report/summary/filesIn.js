function buildFilesIn (evt) {
  switch(evt.params.data.id) {
    case "1":
      var filesIn = {
	"anat": "\/niak\/niak_debug\/work\/target\/data_test_niak_mnc1\/anat_subject1.mnc.gz",
	"fmri": {
		"session1": {
			"motor": "\/niak\/niak_debug\/work\/target\/data_test_niak_mnc1\/func_motor_subject1.mnc.gz"
		}
	},
	"component_to_keep": "gb_niak_omitted"
}

    case "2":
      var filesIn = {
	"anat": "\/niak\/niak_debug\/work\/target\/data_test_niak_mnc1\/anat_subject2.mnc.gz",
	"fmri": {
		"session1": {
			"motor": "\/niak\/niak_debug\/work\/target\/data_test_niak_mnc1\/func_motor_subject2.mnc.gz"
		}
	},
	"component_to_keep": "gb_niak_omitted"
}

};
return filesIn 
}

var opt = {
	"civet": "gb_niak_omitted",
	"target_space": "stereonl",
	"flag_rand": 0,
	"granularity": "cleanup",
	"tune": {
	},
	"flag_verbose": 1,
	"template": {
		"t1": "\/niak\/niak_debug\/work\/target\/data_test_niak_mnc1\/\/mni_icbm152_asym_09a_5mm\/mni_icbm152_t1_tal_nlin_asym_09a_5mm.mnc.gz",
		"fmri": "\/niak\/niak_debug\/niak\/template\/roi_aal_3mm.mnc.gz",
		"aal": "\/niak\/niak_debug\/niak\/template\/roi_aal_3mm.mnc.gz",
		"mask": "\/niak\/niak_debug\/work\/target\/data_test_niak_mnc1\/\/mni_icbm152_asym_09a_5mm\/mni_icbm152_t1_tal_nlin_asym_09a_mask_5mm.mnc.gz",
		"mask_dilated": "\/niak\/niak_debug\/work\/target\/data_test_niak_mnc1\/\/mni_icbm152_asym_09a_5mm\/mni_icbm152_t1_tal_nlin_asym_09a_mask_dilated5mm_5mm.mnc.gz",
		"mask_eroded": "\/niak\/niak_debug\/work\/target\/data_test_niak_mnc1\/\/mni_icbm152_asym_09a_5mm\/mni_icbm152_t1_tal_nlin_asym_09a_mask_eroded5mm_5mm.mnc.gz",
		"mask_bold": "\/niak\/niak_debug\/work\/target\/data_test_niak_mnc1\/\/mni_icbm152_asym_09a_5mm\/mni_icbm152_t1_tal_nlin_asym_09a_mask_dilated5mm_5mm.mnc.gz",
		"mask_avg": "\/niak\/niak_debug\/work\/target\/data_test_niak_mnc1\/\/mni_icbm152_asym_09a_5mm\/mni_icbm152_t1_tal_nlin_asym_09a_mask_eroded5mm_5mm.mnc.gz",
		"mask_wm": "\/niak\/niak_debug\/work\/target\/data_test_niak_mnc1\/\/mni_icbm152_asym_09a_5mm\/mni_icbm152_t1_tal_nlin_asym_09a_mask_pure_wm_5mm.mnc.gz",
		"mask_vent": "\/niak\/niak_debug\/niak\/template\/roi_ventricle.mnc.gz",
		"mask_willis": "\/niak\/niak_debug\/niak\/template\/roi_stem.mnc.gz"
	},
	"size_output": "all",
	"folder_out": "\/niak\/niak_debug\/work\/target\/result\/demoniak_preproc\/",
	"folder_logs": "",
	"folder_fmri": "",
	"folder_anat": "",
	"folder_qc": "",
	"folder_intermediate": "",
	"flag_test": 1,
	"psom": {
		"path_logs": "\/niak\/niak_debug\/work\/target\/result\/demoniak_preproc\/logs\/"
	},
	"slice_timing": {
		"type_acquisition": "interleaved ascending",
		"type_scanner": "Bruker"
	},
	"motion": {
	},
	"qc_motion_correction_ind": {
	},
	"t1_preprocess": {
		"nu_correct": {
			"arg": "-distance 50"
		}
	},
	"pve": {
	},
	"mask_anat2func": {
	},
	"anat2func": {
	},
	"qc_coregister": {
	},
	"time_filter": {
	},
	"resample_vol": {
		"voxel_size": [10,10,10]
	},
	"smooth_vol": {
	},
	"build_confounds": {
		"thre_fd": 0.4,
		"nb_min_vol": 15
	},
	"regress_confounds": {
	}
}

