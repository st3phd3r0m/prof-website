<?php

namespace App\Form;

use App\Entity\ExperiencesAndEducations;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\ChoiceType;
use Symfony\Component\Form\Extension\Core\Type\DateType;
use Symfony\Component\Form\Extension\Core\Type\NumberType;
use Symfony\Component\Form\Extension\Core\Type\TextareaType;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\Extension\Core\Type\UrlType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Symfony\Component\Validator\Constraints\NotBlank;
use Symfony\Component\Validator\Constraints\Url;

class ExperiencesAndEducationsType extends AbstractType
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
                'label' => 'What',
                'constraints' => [
                    new NotBlank([
                        'message' => 'Veuillez saisir une expérience ou un atout',
                    ]),
                ],
            ])
            ->add('description', TextareaType::class, [
                'required' => false,
                'label' => 'Description',
            ])
            ->add('work_place', TextType::class, [
                'required' => false,
                'label' => 'Where',
                'constraints' => [
                    new NotBlank([
                        'message' => 'Veuillez saisir l\'organisme de travail',
                    ]),
                ],
            ])
            ->add('start_date', DateType::class, [
                'required' => false,
                'widget' => 'single_text',
            ])
            ->add('end_date', DateType::class, [
                'required' => false,
                'widget' => 'single_text',
            ])
            ->add('city', TextType::class, [
                'required' => false,
                'label' => 'Ville/Pays',
                'constraints' => [
                    new NotBlank([
                        'message' => 'Veuillez saisir Ville/Pays',
                    ]),
                ],
            ])
            ->add('url_work_place', UrlType::class, [
                'required' => false,
                'label' => 'Lien hypertexte',
                'constraints' => [
                    new NotBlank([
                        'message' => 'Veuillez saisir Lien hypertexte',
                    ]),
                    new Url([
                        'message' => 'Veuillez saisir Lien hypertexte',
                    ]),
                ],
            ])
            ->add('position_order', NumberType::class, [
                'required' => true,
                'label' => 'Ordre d\'apparition',
                'html5' => true,
                'constraints' => [
                    new NotBlank([
                        'message' => 'Veuillez saisir un chiffre',
                    ]),
                ],
            ])
            ->add('xpOrEducation', ChoiceType::class, [
                'label' => 'Expérience ou formation ? ',
                'required' => true,
                'choices' => [
                    'Formation' => 0,
                    'Expérience' => 1,
                ],
            ])
        ;
    }

    public function configureOptions(OptionsResolver $resolver): void
    {
        $resolver->setDefaults([
            'data_class' => ExperiencesAndEducations::class,
        ]);
    }
}
