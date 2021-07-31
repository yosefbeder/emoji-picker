export const capitalize = (w: string): string =>
  w[0].toUpperCase().concat(w.slice(1));

export const normalize = (s: string) => s.split(/_|-/g).join(' ');
