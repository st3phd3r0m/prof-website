<?php

namespace App\Form;

use App\Entity\SocialNetworks;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\TextareaType;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\Extension\Core\Type\UrlType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Symfony\Component\Validator\Constraints\NotBlank;
use Symfony\Component\Validator\Constraints\Url;

class SocialNetworksType extends AbstractType
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
                'label' => 'Contenu dans attribut balise <a> : ',

                // 'constraints' => [
                //     new NotBlank([
                //         'message' => 'Veuillez saisir une chaine de caractères.',
                //     ]),
                // ]
            ])
            ->add('logo', TextareaType::class, [
                'required' => true,
                'label' => 'Logo du lien : ',
                // 'constraints' => [
                //     new NotBlank([
                //         'message' => 'Veuillez saisir une chaine de caractères.',
                //     ]),
                // ]
            ])
            ->add('url', UrlType::class, [
                'required' => true,
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
        ;
    }

    public function configureOptions(OptionsResolver $resolver): void
    {
        $resolver->setDefaults([
            'data_class' => SocialNetworks::class,
        ]);
    }
}
