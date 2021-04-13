<?php

namespace App\Repository;

use App\Entity\ExperiencesAndEducations;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @method ExperiencesAndEducations|null find($id, $lockMode = null, $lockVersion = null)
 * @method ExperiencesAndEducations|null findOneBy(array $criteria, array $orderBy = null)
 * @method ExperiencesAndEducations[]    findAll()
 * @method ExperiencesAndEducations[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class ExperiencesAndEducationsRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, ExperiencesAndEducations::class);
    }

    // /**
    //  * @return ExperiencesAndEducations[] Returns an array of ExperiencesAndEducations objects
    //  */
    /*
    public function findByExampleField($value)
    {
        return $this->createQueryBuilder('e')
            ->andWhere('e.exampleField = :val')
            ->setParameter('val', $value)
            ->orderBy('e.id', 'ASC')
            ->setMaxResults(10)
            ->getQuery()
            ->getResult()
        ;
    }
    */

    /*
    public function findOneBySomeField($value): ?ExperiencesAndEducations
    {
        return $this->createQueryBuilder('e')
            ->andWhere('e.exampleField = :val')
            ->setParameter('val', $value)
            ->getQuery()
            ->getOneOrNullResult()
        ;
    }
    */
}
