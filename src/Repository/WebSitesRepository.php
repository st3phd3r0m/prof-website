<?php

namespace App\Repository;

use App\Entity\WebSites;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @method WebSites|null find($id, $lockMode = null, $lockVersion = null)
 * @method WebSites|null findOneBy(array $criteria, array $orderBy = null)
 * @method WebSites[]    findAll()
 * @method WebSites[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class WebSitesRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, WebSites::class);
    }

    // /**
    //  * @return WebSites[] Returns an array of WebSites objects
    //  */
    /*
    public function findByExampleField($value)
    {
        return $this->createQueryBuilder('w')
            ->andWhere('w.exampleField = :val')
            ->setParameter('val', $value)
            ->orderBy('w.id', 'ASC')
            ->setMaxResults(10)
            ->getQuery()
            ->getResult()
        ;
    }
    */

    /*
    public function findOneBySomeField($value): ?WebSites
    {
        return $this->createQueryBuilder('w')
            ->andWhere('w.exampleField = :val')
            ->setParameter('val', $value)
            ->getQuery()
            ->getOneOrNullResult()
        ;
    }
    */
}
