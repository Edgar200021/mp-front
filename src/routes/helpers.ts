export enum PathsPublic {
  HOME = "/",
  PRODUCT_DETAILS = "/product/:idOrSlug",
}
export enum PathsPrivate {
  ACCOUNT_SETTINGS = "/account-settings",
}

export const pathsPublic: Record<string, PathsPublic> = {
  home: PathsPublic.HOME,
  productDetails: PathsPublic.PRODUCT_DETAILS,
};

export const pathsPrivate: Record<string, PathsPrivate> = {
  accountSettings: PathsPrivate.ACCOUNT_SETTINGS,
};

export const paths: Record<string, string> = { ...pathsPrivate, ...pathsPublic };

export const checkPathMatch = (
  pathname: string,
  allPaths: typeof pathsPublic | typeof pathsPrivate
) => {
  let isMatch = false;

  const AllPaths = Object.values(allPaths).map((k) => k);
  const pathFirstSection = pathname.split("/")[1];

  AllPaths.forEach((p) => {
    if (p.slice(1) === pathFirstSection) isMatch = true;
  });

  return isMatch;
};
