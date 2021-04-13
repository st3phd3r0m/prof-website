<?php

namespace App\Repository;

use App\Entity\SkillsAndFeatures;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @method SkillsAndFeatures|null find($id, $lockMode = null, $lockVersion = null)
 * @method SkillsAndFeatures|null findOneBy(array $criteria, array $orderBy = null)
 * @method SkillsAndFeatures[]    findAll()
 * @method SkillsAndFeatures[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class SkillsAndFeaturesRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, SkillsAndFeatures::class);
    }

    // /**
    //  * @return SkillsAndFeatures[] Returns an array of SkillsAndFeatures objects
    //  */
    /*
    public function findByExampleField($value)
    {
        return $this->createQueryBuilder('s')
            ->andWhere('s.exampleField = :val')
            ->setParameter('val', $value)
            ->orderBy('s.id', 'ASC')
            ->setMaxResults(10)
            ->getQuery()
            ->getResult()
        ;
    }
    */

    /*
    public function findOneBySomeField($value): ?SkillsAndFeatures
    {
        return $this->createQueryBuilder('s')
            ->andWhere('s.exampleField = :val')
            ->setParameter('val', $value)
            ->getQuery()
            ->getOneOrNullResult()
        ;
    }
    */
}
