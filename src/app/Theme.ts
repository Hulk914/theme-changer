export interface Theme {
  name: string;
  properties: any;
}

export const theme1: Theme = {
  name: 'theme1',
  properties: {
    '--background-color': '#264653',
    '--color-option-1': '#2a9d8f',
    '--color-option-2': '#e9c46a',
    '--color-option-3': '#f4a261',
    '--color-option-4': '#e76f51',
    '--text-color': 'white',
    '--button-background': 'var(--color-option-3)',
  },
};

export const theme2: Theme = {
  name: 'theme2',
  properties: {
    '--background-color': '#e63946',
    '--color-option-1': '#f1faee',
    '--color-option-2': '#a8dadc',
    '--color-option-3': '#457b9d',
    '--color-option-4': '#1d3557',
    '--text-color': 'white',
    '--button-background': 'var(--color-option-3)',
  },
};

export const theme3: Theme = {
  name: 'theme3',
  properties: {
    '--background-color': '#cb997e',
    '--color-option-1': '#ddbea9',
    '--color-option-2': '#ffe8d6',
    '--color-option-3': '#b7b7a4',
    '--color-option-4': '#a5a58d',
    '--text-color': 'white',
    '--button-background': 'var(--color-option-3)',
  },
};
