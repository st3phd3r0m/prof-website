<?php

namespace App\Form;

use App\Entity\UserImages;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Symfony\Component\Validator\Constraints\Image;
use Symfony\Component\Validator\Constraints\NotBlank;
use Vich\UploaderBundle\Form\Type\VichImageType;

class UserImagesType extends AbstractType
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
            'data_class' => UserImages::class,
        ]);
    }
}
