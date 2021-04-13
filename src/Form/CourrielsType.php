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

class CourrielsType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        $builder
            ->add('nosiar', HiddenType::class,[
                'required' => true,
                'mapped'=>false,
                'constraints' =>[
                    new Blank([
                        'message'=>'Le champ doit rester vide.'
                    ])
                ]
            ])
            ->add('name', TextType::class, [
                'required' => true,
                'label' => false,
                'attr'=>[
                    'placeholder' => 'Nom'
                ],
                'constraints' => [
                    new NotBlank([
                        'message' => 'Veuillez saisir vos nom et prénom'
                    ])
                ]
            ])
            ->add('mail_from', EmailType::class, [
                'required' => true,
                'label' => false,
                'attr'=>[
                    'placeholder' => 'E-mail'
                ],
                'constraints' => [
                    new NotBlank([
                        'message' => 'Veuillez saisir une adresse e-mail valide'
                    ]),
                    new Email([
                        'message' => 'Veuillez saisir une adresse e-mail valide'
                    ])
                ]
            ])
            ->add('subject', TextType::class, [
                'required' => true,
                'label' => false,
                'attr'=>[
                    'placeholder' => 'Objet de votre message'
                ],
                'constraints' => [
                    new NotBlank([
                        'message' => 'Champs recquis'
                    ])
                ]
            ])
            ->add('message', TextareaType::class, [
                'required' => true,
                'label' => false,
                'attr'=>[
                    'placeholder' => 'Saisissez votre message'
                ],
                'constraints' => [
                    new NotBlank([
                        'message' => 'Veuillez saisir votre message',
                    ]),
                    new Length([
                        'min' => 10,
                        'minMessage' => "Votre message doit comporter au moins {{ limit }}
                        caractères.",
                    ])
                ]
            ])
        ;
    }

    public function configureOptions(OptionsResolver $resolver)
    {
        $resolver->setDefaults([
            'data_class' => Courriels::class,
        ]);
    }
}
