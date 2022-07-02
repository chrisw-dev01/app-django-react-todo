{ pkgs ? import <nixpkgs> {} }:
let
  my-python = pkgs.python3;
  python-with-my-packages = my-python.withPackages (p: with p; [
    django
    djangorestframework
    django-cors-headers
  ]);
in
pkgs.mkShell {
  buildInputs = [
    python-with-my-packages
    pkgs.nodejs_latest
  ];
  shellHook = ''
    PYTHONPATH=${python-with-my-packages}/${python-with-my-packages.sitePackages}
    # maybe set more env-vars
  '';
}
