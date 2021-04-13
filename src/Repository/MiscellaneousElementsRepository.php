<?php

namespace App\Repository;

use App\Entity\MiscellaneousElements;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @method MiscellaneousElements|null find($id, $lockMode = null, $lockVersion = null)
 * @method MiscellaneousElements|null findOneBy(array $criteria, array $orderBy = null)
 * @method MiscellaneousElements[]    findAll()
 * @method MiscellaneousElements[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class MiscellaneousElementsRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, MiscellaneousElements::class);
    }

    // /**
    //  * @return MiscellaneousElements[] Returns an array of MiscellaneousElements objects
    //  */
    /*
    public function findByExampleField($value)
    {
        return $this->createQueryBuilder('m')
            ->andWhere('m.exampleField = :val')
            ->setParameter('val', $value)
            ->orderBy('m.id', 'ASC')
            ->setMaxResults(10)
            ->getQuery()
            ->getResult()
        ;
    }
    */

    /*
    public function findOneBySomeField($value): ?MiscellaneousElements
    {
        return $this->createQueryBuilder('m')
            ->andWhere('m.exampleField = :val')
            ->setParameter('val', $value)
            ->getQuery()
            ->getOneOrNullResult()
        ;
    }
    */
}
