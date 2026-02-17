MDBOOK_VERSION=$(curl -s "https://api.github.com/repos/rust-lang/mdBook/releases/latest" | grep -Po '"tag_name": "v\K[0-9.]+')
wget -qO mdbook.tar.gz https://github.com/rust-lang/mdBook/releases/latest/download/mdbook-v$MDBOOK_VERSION-x86_64-unknown-linux-gnu.tar.gz
sudo tar xf mdbook.tar.gz -C /usr/local/bin mdbook
echo "mdBook version $(mdbook --version) installed."
rm -rf mdbook.tar.gz