<?php

namespace App\Form;

use App\Entity\SkillsAndFeatures;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\ChoiceType;
use Symfony\Component\Form\Extension\Core\Type\RangeType;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Symfony\Component\Validator\Constraints\NotBlank;

class SkillsAndFeaturesType extends AbstractType
{
    /**
     * Undocumented function.
     *
     * @param array<string, mixed> $options
     *
     * @return void
     */
    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        $builder
            ->add('what', TextType::class, [
                'required' => true,
                'label' => 'Atout ou compétence : ',

                'constraints' => [
                    new NotBlank([
                        'message' => 'Veuillez saisir une chaine de caractères.',
                    ]),
                ],
            ])
            ->add('whatmore', TextType::class, [
                'required' => false,
                'label' => 'Précisions : ',
                // 'constraints' => [
                //     new NotBlank([
                //         'message' => 'Veuillez saisir une chaine de caractères.',
                //     ]),
                // ]
            ])
            ->add('keywords', TextType::class, [
                'required' => false,
                'label' => 'Ajouter des mots-clés, délimités par des hashtags ("#"), afin de référencer vos compétences : ',
                'mapped' => false,
                'data' => (null != $builder->getData()->getKeywords()) ? implode('#', $builder->getData()->getKeywords()) : '',
            ])
            ->add('rate', RangeType::class, [
                'label' => 'Pourcentage maitrise atout/compétence : ',
                'required' => false,
                'attr' => [
                    'min' => 0,
                    'max' => 100,
                ],
            ])
            ->add('skill_or_feature', ChoiceType::class, [
                'label' => 'Atout ou compétence ? ',
                'required' => true,
                'choices' => [
                    'Compétence' => 0,
                    'Atout' => 1,
                ],
            ])
        ;
    }

    public function configureOptions(OptionsResolver $resolver): void
    {
        $resolver->setDefaults([
            'data_class' => SkillsAndFeatures::class,
        ]);
    }
}
