// root path to app

const INJECTION_DEV_MODE = true

export const ROOT_PATH =  INJECTION_DEV_MODE ? '/index.php/test/' : '/'

export const QUERY_SPLIT = INJECTION_DEV_MODE ? '/index.php/test/' : '.org/'

// path to individual rep page
export const REPS_PATH = `${ROOT_PATH}rep/`

// operation state within the US
export const US_STATE = 'ca'

// state center lat/lng
export const STATE_CENTER = [37.2719, -119.2702]

// state boundaries
export const STATE_BOUNDS = [[32.5343, -124.4096], [42.0095, -114.1308]]

export const MAP_PERCISION = 4

// amplify team base url
export const AMPLIFY_URL_BASE = `https://civictools.appspot-preview.com/api/v1/actions?teamId=-Kr2PPG5GTkR3oFfQ_Lq&state=${US_STATE}`

export const ACTION_TYPES = ['call' , 'flex']

// image sources
//export const CAP_PIC = 'https://nerdist.com/wp-content/uploads/2016/05/20160506_nerdistnews_capexclusive_1x1.jpg'
export const REP_PIC_PATH = 'https://s3-us-west-1.amazonaws.com/amplify-portraits/'


// actions display nums
// number of actions to show on initial actions display list load
export const ACTIONS_DISPLAY_LIMIT = 3
// number of additional actions to display on "load more" click
export const ACTIONS_DISPLAY_INCREMENT = 10

// potential url params to parse out of the url
export const PARAM_TYPES = [
  'lat',
  'lng',
  'actionId',
  'districtLower',
  'districtUpper'
]

// colors
export const COLORS = {
  TEXT: {
    BLUE: '#0071b9',
    RED: '#ff0000',
  },
  DISTRICT: {
  	UPPER: '#fbb040',
    LOWER: '#39b54a', 
  }

}

// consistent copy

export const DATA_FINE_PRINT = 'Address is used only to determine your districts. We do not store or retain any personal info.'

