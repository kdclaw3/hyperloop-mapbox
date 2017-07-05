
module.exports = {
	hyperloop: {
		ios: {		
			xcodebuild: {
				flags: {
					FRAMEWORK_SEARCH_PATHS: '../../src',
					LD_RUNPATH_SEARCH_PATHS: '$(inherited) "@executable_path/Frameworks" $(FRAMEWORK_SEARCH_PATHS)'
				}
			},
			thirdparty: {
				'Mapbox': {
					source: ['src'],
					header: 'src',
					resource: 'src'
				}
			}
		}
	}
};
