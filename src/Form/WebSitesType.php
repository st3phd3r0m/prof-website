<?php

namespace App\Form;

use App\Entity\WebSites;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\Extension\Core\Type\UrlType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Symfony\Component\Validator\Constraints\Image;
use Symfony\Component\Validator\Constraints\NotBlank;
use Symfony\Component\Validator\Constraints\Url;
use Vich\UploaderBundle\Form\Type\VichImageType;

class WebSitesType extends AbstractType
{
    /**
     * Undocumented function.
     *
     * @param array<string, mixed> $options
     */
    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        $builder
            ->add('name', TextType::class, [
                'required' => true,
                'label' => 'Nom du site : ',
                'constraints' => [
                    new NotBlank([
                        'message' => 'Veuillez saisir une chaine de caractères.',
                    ]),
                ],
            ])
            ->add('url', UrlType::class, [
                'required' => false,
                'label' => 'Url',
                // 'constraints' => [
                //     new Url([
                //         'message' => 'Veuillez saisir une url',
                //     ]),
                // ],
            ])
            ->add('repo_url', UrlType::class, [
                'required' => false,
                'label' => 'Url dépôt',
                'constraints' => [
                    new Url([
                        'message' => 'Veuillez saisir une url',
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
            ->add('alt', TextType::class, [
                'required' => true,
                'label' => 'Texte alternatif : ',
                'constraints' => [
                    new NotBlank([
                        'message' => 'Veuillez saisir un texte.',
                    ]),
                ],
            ])
        ;
    }

    public function configureOptions(OptionsResolver $resolver): void
    {
        $resolver->setDefaults([
            'data_class' => WebSites::class,
        ]);
    }
}
