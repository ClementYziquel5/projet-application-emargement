<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Doctrine\Bundle\DoctrineBundle\Registry;
use Doctrine\Persistence\ManagerRegistry;


use App\Entity\Groupe;
use App\Entity\Promo;
use App\Entity\Etudiant;


#[Route('/api/v1.0', name: 'api_')]
class ApiController extends AbstractController
{
    private $doctrine;
    public function __construct(ManagerRegistry $doctrine)
    {
        $this->doctrine = $doctrine;
    }

    // Récupérer tous les groupes
    #[Route('/groupes', name: 'groupe')]
    public function getAllGroupes(): Response
    {
        $groupes = $this->doctrine->getRepository(Groupe::class)->findAll();

        //var_dump($groupes);
        //echo "test";

        $response = new Response();
        $response->setContent(json_encode($groupes));
        $response->headers->set('Content-Type', 'application/json');
        $response->headers->set('Access-Control-Allow-Origin', '*');
        return $response;
    }

    // Récupérer toutes les promos
    #[Route('/promos', name: 'promo')]
    public function getAllPromos(): Response
    {
        $promos = $this->doctrine->getRepository(Promo::class)->findAll();

        $response = new Response();
        $response->setContent(json_encode($promos));
        $response->headers->set('Content-Type', 'application/json');
        $response->headers->set('Access-Control-Allow-Origin', '*');
        return $response;
    }

    // Récupérer les étudiants d'un groupe
    #[Route('/groupe/{id_groupe}/etudiants', name: 'etudiants_groupe')]
    public function getEtudiantsByGroupe($id_groupe): Response
    {
        $etudiants = $this->doctrine->getRepository(Etudiant::class)->getEtudiantsByGroupe($id_groupe);

        $response = new Response();
        $response->setContent(json_encode($etudiants));
        $response->headers->set('Content-Type', 'application/json');
        $response->headers->set('Access-Control-Allow-Origin', '*');
        return $response;
    }
    
}
