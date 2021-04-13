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
    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        $builder
            ->add('name', TextType::class, [
                'required' => true,
                'label' => 'Nom du site : ',
                'constraints' => [
                    new NotBlank([
                        'message' => 'Veuillez saisir une chaine de caractères.',
                    ]),
                ]
            ])
            ->add('hyperlink', UrlType::class, [
                'required' => true,
                'label' => 'Lien hypertexte',
                'constraints' => [
                    new NotBlank([
                        'message' => 'Veuillez saisir Lien hypertexte'
                    ]),
                    new Url([
                        'message' => 'Veuillez saisir Lien hypertexte'
                    ])
                ]
            ])
            ->add('imageFile', VichImageType::class,[
                'required' => false,
                'label'=>'Image de présentation',
                'download_link'=>false,
                'imagine_pattern'=>'miniatures',
                'constraints'=>[
                    new Image([
                        'maxSize'=>'2M',
                        'maxSizeMessage'=> 'Votre image dépasse les 2Mo',
                        'mimeTypes'=>['image/webp'],
                        'mimeTypesMessage'=>'Votre image doit être de type WEBP',
                    ])
                ]
            ])
            ->add('alt', TextType::class, [
                'required' => true,
                'label' => 'Texte alternatif : ',
                'constraints' => [
                    new NotBlank([
                        'message' => 'Veuillez saisir un texte.',
                    ]),
                ]
            ])
        ;
    }

    public function configureOptions(OptionsResolver $resolver)
    {
        $resolver->setDefaults([
            'data_class' => WebSites::class,
        ]);
    }
}
