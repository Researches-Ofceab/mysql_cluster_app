
docker run -d --net=cluster --name=manager_1 --ip=192.168.0.2 mysql/mysql-cluster ndb_mgmd

docker run -d --net=cluster --name=ndb1 --ip=192.168.0.3 mysql/mysql-cluster ndbd

docker run -d --net=cluster --name=ndb2 --ip=192.168.0.4 mysql/mysql-cluster ndbd

docker run -d --net=cluster --name=ndb3 --ip=192.168.0.5 mysql/mysql-cluster ndbd

docker run -d --net=cluster --name=mysql_server_1 --ip=192.168.0.6 -e MYSQL_ROOT_PASSWORD=root mysql/mysql-cluster mysqld

docker run -it --net=mysql_cluster mysql/mysql-cluster ndb_mgm

