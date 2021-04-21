<?php

namespace App\Form;

use App\Entity\Authors;
use App\Entity\Publications;
use Symfony\Bridge\Doctrine\Form\Type\EntityType;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\CollectionType;
use Symfony\Component\Form\Extension\Core\Type\DateType;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\Extension\Core\Type\UrlType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Symfony\Component\Validator\Constraints\DateTime;
use Symfony\Component\Validator\Constraints\Image;
use Symfony\Component\Validator\Constraints\NotBlank;
use Symfony\Component\Validator\Constraints\Url;
use Vich\UploaderBundle\Form\Type\VichImageType;

class PublicationsType extends AbstractType
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
            ->add('title', TextType::class, [
                'required' => true,
                'label' => 'Titre de la publication scientifique : ',
                'constraints' => [
                    new NotBlank([
                        'message' => 'Veuillez saisir un titre.',
                    ]),
                ],
            ])
            ->add('editor', TextType::class, [
                'required' => true,
                'label' => 'Nom de l\'éditeur : ',
                'constraints' => [
                    new NotBlank([
                        'message' => 'Veuillez saisir un nom d\'éditeur.',
                    ]),
                ],
            ])
            ->add('hyperlink', UrlType::class, [
                'required' => true,
                'label' => 'URL du lien : ',
                'constraints' => [
                    new NotBlank([
                        'message' => 'Veuillez saisir une url.',
                    ]),
                    new Url([
                        'message' => 'Veuillez saisir une url.',
                    ]),
                ],
            ])
            ->add('published_at', DateType::class, [
                'required' => true,
                'label' => 'Date de publication',
                'widget' => 'single_text',
                'constraints' => [
                    new NotBlank([
                        'message' => 'Veuillez saisir une date',
                    ]),
                    new DateTime([
                        'message' => 'La date est invalide',
                    ]),
                ],
            ])
            ->add('alt', TextType::class, [
                'required' => true,
                'label' => 'Texte alternatif : ',
                'constraints' => [
                    new NotBlank([
                        'message' => 'Veuillez saisir un texte.',
                    ]),
                ],
            ])
            ->add('imageFile', VichImageType::class, [
                'required' => false,
                'label' => 'Image de présentation',
                'download_link' => false,
                'imagine_pattern' => 'miniatures',
                'constraints' => [
                    new Image([
                        'maxSize' => '2M',
                        'maxSizeMessage' => 'Votre image dépasse les 2Mo',
                        'mimeTypes' => ['image/webp'],
                        'mimeTypesMessage' => 'Votre image doit être de type WEBP',
                    ]),
                ],
            ])
            ->add('authors', CollectionType::class, [
                'required' => false,
                'label' => 'Auteurs de la publication scientifique',
                'entry_type' => EntityType::class,
                'entry_options' => [
                    'choice_label' => 'name',
                    'class' => Authors::class,
                ],
                'allow_add' => true,
                'allow_delete' => true,
                'prototype' => true,
            ])
        ;
    }

    public function configureOptions(OptionsResolver $resolver): void
    {
        $resolver->setDefaults([
            'data_class' => Publications::class,
        ]);
    }
}
