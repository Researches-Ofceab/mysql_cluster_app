create docker network

# docker network create innodbnet

# docker run -d --net=innodbnet --name=ndb1 mysql/mysql-cluster ndbd
# docker run -d --net=innodbnet --name=ndb2 mysql/mysql-cluster ndbd

# docker run -d --net=cluster --name=mysql1 --ip=192.168.0.10 -e MYSQL_RANDOM_ROOT_PASSWORD=true mysql/mysql-cluster mysqld

# docker run -it --net=cluster mysql/mysql-cluster ndb_mgm


docker network create mysql_cluster --subnet=172.168.0.0/16


docker run -d --net=mysql_cluster --name=manager_1 -v $(pwd)/configs/mysql-cluster.cnf:/etc/mysql-cluster.cnf --ip=172.168.0.2 mysql/mysql-cluster ndb_mgmd

docker run -d --net=mysql_cluster --name=ndb1 --ip=172.168.0.3 mysql/mysql-cluster ndbd

docker run -d --net=mysql_cluster --name=ndb2 --ip=172.168.0.4 mysql/mysql-cluster ndbd

docker run -d --net=mysql_cluster --name=ndb3 --ip=172.168.0.5 mysql/mysql-cluster ndbd

docker run -d --net=mysql_cluster --name=mysql_server_1 -v $(pwd)/cluster-config/mysql-cluster.cnf:/etc/mysql-cluster.cnf --ip=172.168.0.6 -e MYSQL_ROOT_PASSWORD=true mysql/mysql-cluster mysqld

docker run -it --net=mysql_cluster mysql/mysql-cluster ndb_mgm

