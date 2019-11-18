import youtube from './youtube'

const medals = {
    'Estados Unidos': {
        medals: [21, 21, 21],
        modals: {
            'Natação': {
                '200m': [0, 1, 0, youtube.Modalidades.Natacao200],
                '100m': [1, 0, 0, youtube.Modalidades.Natacao100],
            },
            'Ginástica': {
                'Rítmica': [1, 0, 0, youtube.Modalidades.GinasticaRitmica],
                'Cavalo': [0, 0, 1, youtube.Modalidades.GinasticaSalto]
            },
            'Atletismo': {
                '100m': [0, 0, 1, youtube.Modalidades.Corrida100],
                '200m': [0, 1, 0, youtube.Modalidades.Corrida200],
            }
        }
    },
    'Brasil': {
        medals: [12, 12, 12],
        modals: {
            'Natação': {
                '200m': [0, 1, 0, youtube.Modalidades.Natacao200],
                '100m': [1, 0, 0, youtube.Modalidades.Natacao100],
            },
            'Ginástica': {
                'Rítmica': [1, 0, 0, youtube.Modalidades.GinasticaRitmica],
                'Cavalo': [0, 0, 1, youtube.Modalidades.GinasticaSalto]
            },
            'Atletismo': {
                '100m': [0, 0, 1, youtube.Modalidades.Corrida100],
                '200m': [0, 1, 0, youtube.Modalidades.Corrida200],
            }
        }
    },
    'Canadá': {
        medals: [21, 21, 21],
        modals: {
            'Natação': {
                '200m': [0, 1, 0, youtube.Modalidades.Natacao200],
                '100m': [1, 0, 0, youtube.Modalidades.Natacao100],
            },
            'Ginástica': {
                'Rítmica': [1, 0, 0, youtube.Modalidades.GinasticaRitmica],
                'Cavalo': [0, 0, 1, youtube.Modalidades.GinasticaSalto]
            },
            'Atletismo': {
                '100m': [0, 0, 1, youtube.Modalidades.Corrida100],
                '200m': [0, 1, 0, youtube.Modalidades.Corrida200],
            }
        }
    },
    'Inglaterra': {
        medals: [32, 32, 32],
        modals: {
            'Natação': {
                '200m': [0, 1, 0, youtube.Modalidades.Natacao200],
                '100m': [1, 0, 0, youtube.Modalidades.Natacao100],
            },
            'Ginástica': {
                'Rítmica': [1, 0, 0, youtube.Modalidades.GinasticaRitmica],
                'Cavalo': [0, 0, 1, youtube.Modalidades.GinasticaSalto]
            },
            'Atletismo': {
                '100m': [0, 0, 1, youtube.Modalidades.Corrida100],
                '200m': [0, 1, 0, youtube.Modalidades.Corrida200],
            }
        }
    },
    'México': {
        medals: [4, 4, 4],
        modals: {
            'Natação': {
                '200m': [0, 1, 0, youtube.Modalidades.Natacao200],
                '100m': [1, 0, 0, youtube.Modalidades.Natacao100],
            },
            'Ginástica': {
                'Rítmica': [1, 0, 0, youtube.Modalidades.GinasticaRitmica],
                'Cavalo': [0, 0, 1, youtube.Modalidades.GinasticaSalto]
            },
            'Atletismo': {
                '100m': [0, 0, 1, youtube.Modalidades.Corrida100],
                '200m': [0, 1, 0, youtube.Modalidades.Corrida200],
            }
        }
    },
}
export default medals;