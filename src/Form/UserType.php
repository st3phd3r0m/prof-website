<?php

namespace App\Form;

use App\Entity\User;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\BirthdayType;
use Symfony\Component\Form\Extension\Core\Type\ChoiceType;
use Symfony\Component\Form\Extension\Core\Type\EmailType;
use Symfony\Component\Form\Extension\Core\Type\PasswordType;
use Symfony\Component\Form\Extension\Core\Type\RepeatedType;
use Symfony\Component\Form\Extension\Core\Type\TelType;
use Symfony\Component\Form\Extension\Core\Type\TextareaType;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Symfony\Component\Validator\Constraints\Email;
use Symfony\Component\Validator\Constraints\Image;
use Symfony\Component\Validator\Constraints\Length;
use Symfony\Component\Validator\Constraints\NotBlank;
use Vich\UploaderBundle\Form\Type\VichImageType;

class UserType extends AbstractType
{
    /**
     * Undocumented function
     *
     * @param FormBuilderInterface $builder
     * @param array<string, mixed> $options
     * @return void
     */
    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        $builder
            ->add('email', EmailType::class, [
                'required' => true,
                'label' => 'Adresse e-mail',
                'constraints' => [
                    new NotBlank([
                        'message' => 'Veuillez saisir une adresse e-mail',
                    ]),
                    new Email([
                        'message' => 'Votre adresse e-mail n\'est pas valide',
                    ]),
                ],
            ])
            ->add('firstname', TextType::class, [
                'required' => true,
                'label' => 'Prénom',
                'constraints' => [
                    new NotBlank([
                        'message' => 'Veuillez saisir un prénom',
                    ]),
                ],
            ])
            ->add('lastname', TextType::class, [
                'required' => true,
                'label' => 'Nom',
                'constraints' => [
                    new NotBlank([
                        'message' => 'Veuillez saisir un nom',
                    ]),
                ],
            ])
            ->add('born_at', BirthdayType::class, [
                'required' => false,
                'label' => 'Date de naissance',
            ])
            ->add('occupation', TextType::class, [
                'required' => true,
                'label' => 'Poste',
                'constraints' => [
                    new NotBlank([
                        'message' => 'Veuillez saisir un nom de poste',
                    ]),
                ],
            ])
            ->add('content', TextareaType::class, [
                'required' => false,
                'label' => 'Contenu de l\'élément : ',
            ])
            ->add('location', TextType::class, [
                'required' => false,
                'label' => 'Adresse : ',
            ])
            ->add('phone', TelType::class, [
                'required' => false,
                'label' => 'Numéro de téléphone',
            ])
            ->add('roles', ChoiceType::class, [
                'required' => true,
                'label' => 'Inscrire en tant qu\'administrateur ?',
                'expanded' => true,
                'multiple' => true,
                'choices' => [
                    // 'Utilisateur' => 'ROLE_USER',
                    'Oui' => 'ROLE_ADMIN',
                ],
            ])
            ->add('plainPassword', RepeatedType::class, [
                'required' => true,
                'type' => PasswordType::class,
                'invalid_message' => 'Les mots de passes ne sont pas identiques !',
                'first_options' => ['label' => 'Mot de passe'],
                'second_options' => ['label' => 'Confirmer le mot de passe'],
                'mapped' => false,
                'options' => [
                    'attr' => [
                         'class' => 'form-control form-control-lg form-control-a mb-3',
                    ],
                    'label_attr' => [
                        'class' => 'policeForm',
                    ],
                ],
                'constraints' => [
                    new NotBlank([
                        'message' => 'Entrez votre mot de passe',
                    ]),
                    new Length([
                        'min' => 6,
                        'minMessage' => 'Votre mot de passe doit contenir minimum {{ limit }} caractères',
                        'max' => 4096,
                    ]),
                ],
            ]);
    }

    public function configureOptions(OptionsResolver $resolver): void
    {
        $resolver->setDefaults([
            'data_class' => User::class,
        ]);
    }
}
