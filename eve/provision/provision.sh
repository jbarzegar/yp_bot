
sudo apt-get -qq -y update > /dev/null

sudo apt-get -qq -y upgrade > /dev/null

sudo apt-get -qq -y dist-upgrade > /dev/null

echo "Installing packages"
sudo apt-get -qq -y install \
git \
git-flow \
htop \
libjpeg-dev \
libpq-dev \
openssh-server \
postgresql-9.5 \
postgresql-client-9.5 \
postgresql-contrib-9.5 \
postgresql-server-dev-9.5 \
python-virtualenv \
python3-dev \
tree \
unzip \
libxml2-dev \
libxslt-dev \
> /dev/null

# Setup postgres
echo "---------- Setting up postgres ----------"
sudo rm /etc/postgresql/9.5/main/pg_hba.conf
sudo cp /vagrant/provision/pg_hba.conf /etc/postgresql/9.5/main/pg_hba.conf
sudo chown postgres:postgres /etc/postgresql/9.5/main/pg_hba.conf
sudo chmod u+rw,g+r,o-rwx /etc/postgresql/9.5/main/pg_hba.conf
echo "---------- Creating Eve Database ----------"
sudo -u postgres psql -c "CREATE DATABASE eve;"
echo "---------- Creating Vagrant user ----------"
sudo -u postgres psql -c "CREATE USER $(whoami) WITH PASSWORD 'vagrant';"
echo '---------- Setting prefs for DB ----------'
sudo -u postgres psql -c "ALTER ROLE $(whoami) SET client_encoding TO 'utf8';"
sudo -u postgres psql -c "ALTER ROLE $(whoami) SET default_transaction_isolation TO 'read committed';"
sudo -u postgres psql -c "ALTER ROLE $(whoami) SET timezone TO 'UTC';"
sudo -u postgres psql -c "GRANT ALL PRIVILEGES ON DATABASE eve TO $(whoami);"

sudo service postgresql restart

# Setup python
echo '---------- Setting up Python ----------'
virtualenv -p python3 ~/.eve
source ~/.eve/bin/activate

pip install -r /vagrant/requirements/dev.txt

sudo ln -s /vagrant ~/eve
