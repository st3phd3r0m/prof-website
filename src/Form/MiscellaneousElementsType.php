<?php

namespace App\Form;

use App\Entity\MiscellaneousElements;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\CheckboxType;
use Symfony\Component\Form\Extension\Core\Type\TextareaType;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Symfony\Component\Validator\Constraints\Image;
use Symfony\Component\Validator\Constraints\NotBlank;
use Vich\UploaderBundle\Form\Type\VichImageType;

class MiscellaneousElementsType extends AbstractType
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
                'label' => 'Titre de l\'élément : ',

                'constraints' => [
                    new NotBlank([
                        'message' => 'Veuillez saisir un titre.',
                    ]),
                ],
            ])
            ->add('content', TextareaType::class, [
                'required' => false,
                'label' => 'Contenu de l\'élément : ',
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
            ->add('is_aside', CheckboxType::class, [
                'required' => false,
                'label' => 'Elément de type aside ?',
            ])
        ;
    }

    public function configureOptions(OptionsResolver $resolver): void
    {
        $resolver->setDefaults([
            'data_class' => MiscellaneousElements::class,
        ]);
    }
}
