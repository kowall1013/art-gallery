const BREAKPOINTS = {
  tabletMin: 550,
  laptopMin: 1100,
  desktopMin: 1500,
};

export const QUERIES = {
  'tabletAndUp': `(min-width: ${BREAKPOINTS.tabletMin / 16}rem)`,
  'laptopAndUp': `(min-width: ${BREAKPOINTS.laptopMin / 16}rem)`,
  'desktopAndUp': `(min-width: ${BREAKPOINTS.desktopMin / 16}rem)`
};

export const COLORS = {
  primary: "hsla(24, 56%, 63%, 1)",
  secendary: "hsla(0, 0%, 8%, 1)",
  gray: "hsla(0, 0%, 27%, 1)",
  white: "hsla(0, 0%, 100%, 1)",
};