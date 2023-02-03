export const config = {
  initialColorMode: 'dark',
  useSystemColorMode: true,
  
};

export const fonts = {
  heading: `'Poppins', sans-serif`,
  body: `'Poppins', sans-serif`,
};

export const colors = {
  black: {
    7: '#293249',
    9: '#070816',
    10: '#000000',
  },
  green: {
    vocdoni: '#78D8AA',
    8: '#0d4752',
  },
  red: {
    1: '#FED7D7',
    2: '#FEB2B2',
    3: '#FC8181',
    8: '#AC1B1B',
  },
  white: {
    0: '#ffffff',
    2: '#E9ECEC',
  },
};

export const styles = {
  global: {
    'html, body': {
      minHeight: '100vh',
      backgroundColor: 'white',
      _dark: {
        bgGradient: 'linear(#5E6987,#202738,#070816)',
      },
    },
  },
};
