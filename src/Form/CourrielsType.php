<?php

namespace App\Form;

use App\Entity\Courriels;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\EmailType;
use Symfony\Component\Form\Extension\Core\Type\HiddenType;
use Symfony\Component\Form\Extension\Core\Type\TextareaType;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Symfony\Component\Validator\Constraints\Blank;
use Symfony\Component\Validator\Constraints\Email;
use Symfony\Component\Validator\Constraints\Length;
use Symfony\Component\Validator\Constraints\NotBlank;
use Symfony\Component\Validator\Constraints\Regex;

class CourrielsType extends AbstractType
{
    /**
     * @param array<string, mixed> $options
     *
     * @return void
     */
    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        $builder
            ->add('name', TextType::class, [
                'required' => true,
                'label' => false,
                'attr' => [
                    'placeholder' => 'Nom',
                    'minlength' => 4,
                    'maxlength' => 20,
                    'pattern' => '[A-Za-z]{4,20}.{0,}',
                    'title' => 'Votre nom doit comporter entre 4 et 20 carctères et commencer par 4 lettres minimum',
                ],
                'constraints' => [
                    new NotBlank([
                        'message' => 'Veuillez saisir vos nom et prénom',
                    ]),
                    new Length([
                        'min' => 4,
                        'max' => 20,
                        'minMessage' => 'Votre nom doit comporter au moins {{ limit }}
                        caractères.',
                        'maxMessage' => 'Votre nom doit comporter moins de {{ limit }}
                        caractères.',
                    ]),
                    new Regex([
                        'pattern' => '/^[a-zA-Z]{4,20}/',
                        'match' => true,
                        'message' => 'Votre nom doit commencer par 4 lettres minimum',
                    ]),
                ],
            ])
            ->add('mail_from', EmailType::class, [
                'required' => true,
                'label' => false,
                'attr' => [
                    'placeholder' => 'E-mail',
                ],
                'constraints' => [
                    new NotBlank([
                        'message' => 'Veuillez saisir une adresse e-mail valide',
                    ]),
                    new Email([
                        'message' => 'Veuillez saisir une adresse e-mail valide',
                    ]),
                ],
            ])
            ->add('subject', TextType::class, [
                'required' => true,
                'label' => false,
                'attr' => [
                    'placeholder' => 'Objet de votre message',
                    'minlength' => 4,
                    'maxlength' => 50,
                    'pattern' => '[A-Za-z]{4,50}.{0,}',
                    'title' => 'L\'objet de votre message doit commencer par 4 lettres minimum',
                ],
                'constraints' => [
                    new NotBlank([
                        'message' => 'Champs recquis',
                    ]),
                    new Length([
                        'min' => 5,
                        'max' => 50,
                        'minMessage' => "L\'objet de votre message doit comporter au moins {{ limit }}
                        caractères.",
                        'maxMessage' => 'L\'objet de votre message doit comporter moins de {{ limit }}
                        caractères.',
                    ]),
                    new Regex([
                        'pattern' => '/^[a-zA-Z]{5,50}/',
                        'match' => true,
                        'message' => 'L\'objet de votre message doit commencer par 5 lettres minimum',
                    ]),
                ],
            ])
            ->add('message', TextareaType::class, [
                'required' => true,
                'label' => false,
                'attr' => [
                    'placeholder' => 'Saisissez votre message',
                    'minlength' => 4,
                    'pattern' => '[A-Za-z]{4,}.{0,}',
                    'title' => 'Votre message doit commencer par 4 lettres minimum',
                ],
                'constraints' => [
                    new NotBlank([
                        'message' => 'Veuillez saisir votre message',
                    ]),
                    new Length([
                        'min' => 10,
                        'minMessage' => 'Votre message doit comporter au moins {{ limit }}
                        caractères.',
                    ]),
                    new Regex([
                        'pattern' => '/^[a-zA-Z]{4,240}/',
                        'match' => true,
                        'message' => 'Votre message doit commencer par 4 lettres minimum',
                    ]),
                ],
            ])
            ->add('nosiar', HiddenType::class, [
                'required' => true,
                'mapped' => false,
                'constraints' => [
                    new Blank([
                        'message' => 'Le champ doit rester vide.',
                    ]),
                ],
            ])
        ;
    }

    public function configureOptions(OptionsResolver $resolver): void
    {
        $resolver->setDefaults([
            'data_class' => Courriels::class,
        ]);
    }
}
